import { WithNavigation } from '../components/WithNavigation';
import { Button, Card, Flex, Typography, Form, Input, Select, Space, Image, Row, Col} from 'antd';

const { Title, Paragraph } = Typography;

type SizeType = Parameters<typeof Form>[0]['size'];

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
};

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

export default function About() {
  return <WithNavigation>
      <Row gutter={24} align= 'bottom' justify='end'>
        <Col span={10}>
          <div style={{ width: '100%', display: 'flex', alignContent: 'center' }}>
            <img
              width={'100%'}
              height={'30%'}
              src="/app/images/paper_plane.png"
              alt="Description of the image"
              style={{ 
              }}
            />
          </div>
        </Col>

        <Col span={12} style={{ display: 'flex', alignItems: 'center', alignContent: 'center'}}>
        <Form
           {...layout}
           size={'large'}
            name="contact_us"
            labelCol={{ flex: '110px', style: { opacity: 0.5 } }} 
             wrapperCol={{ flex: 1 }}
             style={{ margin: '8rem auto 0', width: '400px' }}
             labelAlign="left" // Align labels inside input boxess
             validateMessages={validateMessages}
             
          >
            <Form.Item style={{display: 'flex', justifyContent: 'center'}}>
              <Title code>Contact Us</Title>
            </Form.Item>
            <Form.Item name={['name']} rules={[{ required: true }]}>
              <Input placeholder="Name" />
            </Form.Item>
          <Form.Item name={['email']} rules={[{ required: true, type: 'email' }]}>
            <Input placeholder="Email ID" />
          </Form.Item>

          <Form.Item name={['user', 'message']}  rules={[{ required: true}]}>
            <Input.TextArea placeholder='Message'/>
          </Form.Item>
          <Form.Item style={{display: 'flex', justifyContent: 'center'}}>
            <Button type="default" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
  </Form>
        </Col>      
      </Row>

  </WithNavigation>;
}
