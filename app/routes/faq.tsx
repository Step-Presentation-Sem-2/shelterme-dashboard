import { Avatar } from 'antd';
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Divider,
  Space,
  Flex,
  Col,
  Row,
  Collapse,
} from 'antd';
import { Typography } from 'antd';

import { WithNavigation } from '../components/WithNavigation';
const { Title, Paragraph, Text } = Typography;

const { Header, Content, Footer } = Layout;

export default function Team() {
  return (
    <WithNavigation>
      <Typography>
        <Title level={2} style={{ marginBottom: '20px', textAlign: 'center' }}>
          <Space align='center'>Frequently Asked Questions and Answers</Space>
        </Title>

        <Collapse
          size='large'
          items={[
            {
              key: '1',
              label: 'What does this model do?',
              children: (
                <p>
                  This tool uses advanced algorithms to analyze images and
                  determine whether they are likely to be real or digitally
                  manipulated (fake).
                </p>
              ),
            },
          ]}
        />

        <Collapse
          size='large'
          items={[
            {
              key: '1',
              label: 'How accurate is the detection??',
              children: (
                <p>
                  The accuracy of the detection can vary based on the complexity
                  of the image and the quality of manipulation. However, our
                  model strives for high accuracy in identifying fake images.
                </p>
              ),
            },
          ]}
        />

        <Collapse
          size='large'
          items={[
            {
              key: '1',
              label: 'Can this tool detect all fake images??',
              children: (
                <p>
                  While our model is effective in many cases, it's important to
                  note that the technology is continuously evolving. Some highly
                  sophisticated forgeries might not be detected by our current
                  model.
                </p>
              ),
            },
          ]}
        />

        <Collapse
          size='large'
          items={[
            {
              key: '1',
              label: 'Is my uploaded image stored or used for other purposes?',
              children: (
                <p>
                  No, we do not store or use your uploaded images for any
                  purpose other than processing them through our detection
                  model. Your privacy and data security are important to us.
                </p>
              ),
            },
          ]}
        />

        <Collapse
          size='large'
          items={[
            {
              key: '1',
              label:
                'Is this tool suitable for professional use or legal verification?',
              children: (
                <p>
                  This tool is intended for informational and educational
                  purposes. While it can assist in identifying potential
                  manipulations, it should not be solely relied upon for
                  professional or legal verification purposes.
                </p>
              ),
            },
          ]}
        />

        <Collapse
          size='large'
          items={[
            {
              key: '1',
              label: 'How often is the model updated or improved?',
              children: (
                <p>
                  We continuously work to enhance the model's capabilities and
                  accuracy by incorporating new techniques and training data.
                </p>
              ),
            },
          ]}
        />

        <Collapse
          size='large'
          items={[
            {
              key: '1',
              label:
                'Is there a fee or subscription required to use this model?',
              children: (
                <p> Not at all, our tool is available for free to users.</p>
              ),
            },
          ]}
        />

        <Collapse
          size='large'
          items={[
            {
              key: '1',
              label:
                'How can consumers be confident in the outcomes your model produces?',
              children: (
                <p>
                  We advise users to take into account the output of our model
                  as a component of a thorough analytical procedure. Even though
                  our approach offers insightful information, making decisions
                  requires human judgment and extra verification techniques.
                </p>
              ),
            },
          ]}
        />

        <Collapse
          size='large'
          items={[
            {
              key: '1',
              label: 'What technologies does your model use?',
              children: (
                <p>
                  Our model employs deep learning techniques, particularly
                  convolutional neural networks (CNNs), to analyze image
                  features and patterns associated with fake images.
                </p>
              ),
            },
          ]}
        />
      </Typography>
    </WithNavigation>
  );
}
