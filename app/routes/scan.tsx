import { useState } from 'react';
import type { UploadFile } from 'antd';
import {
  message,
  Upload,
  Button,
  Form,
  Image,
  Flex,
  Row,
  Col,
  Result,
  Typography,
  Spin,
} from 'antd';
import { UploadChangeParam } from 'antd/es/upload';
import * as antIcons from '@ant-design/icons';
import { WithNavigation } from '~/components/WithNavigation';
import { uploadImage, genericPredictions } from '~/api';

const { InboxOutlined } = antIcons;
const { Title, Text } = Typography;

const boxStyle: React.CSSProperties = {
  marginTop: '20px',
  border: '2px dotted black',
  borderRadius: '8px',
  margin: '4rem',
  padding: '2rem',
};

export enum VLMQuestions {
  Age = 'age',
  Gender = 'gender',
  Ethnicity = 'ethnicity',
  Eyecolor = 'eyecolor',
  Wrinkles = 'wrinkles',
}

enum ResponseStatus {
  /**
   * Not an AI generated image
   */
  Success,
  /**
   * An AI Generated image
   */
  Failure,
  /**
   * This picture doesnot have a headshot
   */
  NotAHeadShot,
}

interface Response {
  status: ResponseStatus;
  data?: { probability: number };
}

export default function Scan() {
  const [previewImage, setPreviewImage] = useState('');
  const [form] = Form.useForm();
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [response, setResponse] = useState<Response>({
    status: ResponseStatus.Success,
  });
  const [vlmResponse, setVlmResponse] = useState<string>('');
  const [isVLMRequestInProgress, setIsVLMRequestInProgress] =
    useState<boolean>(false);

  const handleChange = (info: UploadChangeParam) => {
    const { status } = info.file;
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    } else if (status === 'removed') {
      // Handle removal if necessary
    }

    // Preview image before uploading
    handlePreview(info.file);
  };

  const handlePreview = async (file: UploadFile<unknown>) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.originFileObj);
    reader.onload = () => {
      setPreviewImage(reader.result);
    };
  };

  const uploadImageRequest = async ({ file, onSuccess, onError }) => {
    const formData = new FormData();
    formData.append('files', file);

    try {
      setIsUploading(true);
      const response = await uploadImage(formData);

      if (Array.isArray(response)) {
        const [probability] = response;

        if (probability > 0.5) {
          setResponse({
            status: ResponseStatus.Success,
            data: { probability },
          });
        } else {
          setResponse({
            status: ResponseStatus.Failure,
          });
        }

        onSuccess('Ok');
        return;
      }
      setResponse({ status: ResponseStatus.NotAHeadShot });

      onError('Error');
    } catch (e) {
      console.error('Error uploading file:', e);
      onError(e);
    } finally {
      setIsUploading(false);
    }
  };

  const genericPredictionsRequest = async (question: VLMQuestions) => {
    setIsVLMRequestInProgress(true);
    const response = await genericPredictions(question);
    setVlmResponse(response);
    setIsVLMRequestInProgress(false);
  };

  const onResetForm = () => {
    setIsUploading(false);
    setResponse(null);
    setPreviewImage('');
    setVlmResponse('');
    setIsVLMRequestInProgress(false);
  };

  const renderResult = () => {
    if (!response || !response.status == null) {
      return;
    }

    const resultMap: Record<
      ResponseStatus,
      {
        status: 'success' | 'error';
        title: string;
        message: string;
      }
    > = {
      [ResponseStatus.Success]: {
        status: 'success',
        title: 'This is likely a real image',
        message: `Our model predicts that this is a real image with probability ${response.data?.probability}`,
      },
      [ResponseStatus.Failure]: {
        status: 'error',
        title: 'This is likely an AI generated image',
        message: 'Our model predicts that this is an AI generated image!',
      },
      [ResponseStatus.NotAHeadShot]: {
        status: 'error',
        title: 'This picture does not have a headshot',
        message: 'Our model predicts that this image does not have a headshot',
      },
    };

    return (
      <Result
        status={resultMap[response.status].status}
        title={resultMap[response.status].title}
        subTitle={resultMap[response.status].message}
      />
    );
  };

  return (
    <WithNavigation>
      <Flex
        gap='middle'
        vertical
        justify='center'
        align='center'
        style={boxStyle}
      >
        <Form form={form}>
          {!previewImage ? (
            <Row>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyItems: 'space-evenly',
                  margin: '2rem 8rem',
                }}
              >
                <Title level={2}>Upload picture</Title>
                <InboxOutlined
                  style={{ fontSize: '16rem', color: '#a1a1a1' }}
                />
                <div>
                  <Title
                    level={5}
                  >{`Do you want to check if a headshot is real or fake ?`}</Title>
                </div>

                <Form.Item>
                  <Upload
                    onChange={handleChange}
                    customRequest={uploadImageRequest}
                  >
                    <Button>Browse file</Button>
                  </Upload>
                </Form.Item>
              </div>
            </Row>
          ) : (
            <Row>
              <Col>
                <Form.Item>
                  <Image
                    preview={false}
                    width={300}
                    height={300}
                    src={previewImage ?? 'error'}
                    fallback='data:image/png;base64,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'
                  />
                </Form.Item>
              </Col>
              <Col
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  paddingLeft: '4rem',
                }}
              >
                <>
                  {isUploading ? (
                    <>
                      <Spin />
                      <Text>Classifying image...</Text>
                    </>
                  ) : (
                    <>
                      <Form.Item>{renderResult()}</Form.Item>

                      {response?.status === ResponseStatus.Success && (
                        <>
                          <Form.Item label='More about the image'>
                            <Button
                              disabled={isVLMRequestInProgress}
                              onClick={() =>
                                genericPredictionsRequest(VLMQuestions.Age)
                              }
                            >
                              Age
                            </Button>
                            <Button
                              disabled={isVLMRequestInProgress}
                              onClick={() =>
                                genericPredictionsRequest(VLMQuestions.Gender)
                              }
                            >
                              Gender
                            </Button>
                            <Button
                              disabled={isVLMRequestInProgress}
                              onClick={() =>
                                genericPredictionsRequest(
                                  VLMQuestions.Ethnicity
                                )
                              }
                            >
                              Ethnicity
                            </Button>
                            <Button
                              disabled={isVLMRequestInProgress}
                              onClick={() =>
                                genericPredictionsRequest(VLMQuestions.Eyecolor)
                              }
                            >
                              Eyecolor
                            </Button>
                            <Button
                              disabled={isVLMRequestInProgress}
                              onClick={() =>
                                genericPredictionsRequest(VLMQuestions.Wrinkles)
                              }
                            >
                              Wrinkles
                            </Button>
                          </Form.Item>
                          <Form.Item label='Our model predicts that:'>
                            <Title level={5}>{vlmResponse}</Title>
                          </Form.Item>
                        </>
                      )}

                      <Form.Item>
                        <Button onClick={onResetForm}>
                          Try another image?
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </>
              </Col>
            </Row>
          )}
        </Form>
      </Flex>
    </WithNavigation>
  );
}
