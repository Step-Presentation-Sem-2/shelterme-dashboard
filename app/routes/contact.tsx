import { WithNavigation } from '../components/WithNavigation';
import { Button, Card, Flex, Typography } from 'antd';
import { Carousel } from 'antd';

const cardStyle: React.CSSProperties = {
  width: 1200,
  height: 400,
  margin: "auto",
};

const imgStyle: React.CSSProperties = {
  display: 'block',
  width: 400,
  height: 400,
  
};
const contentStyle: React.CSSProperties = {
  height: '700px',
  color: '#000',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#A9A9A9',
};


export default function About() {
  return <WithNavigation>
    <h1>Contact us</h1>
    <Carousel autoplay>
    <div>
    <div style={contentStyle}>
      <h2>Get in Touch with Authentiscan</h2>
      <Card hoverable style={cardStyle} styles={{ body: { padding: 0, overflow: 'hidden' } }}>
      <Flex justify="space-between">
      <img
        alt="avatar"
        src="app\images\humanoid.svg"
        style={imgStyle}
      />
      <Flex vertical align="flex-end" justify="space-between" style={{ padding: 32 }}>
        <Typography.Title level={3}>
          “Authetiscan is an enterprise-class fake image detector”
        </Typography.Title>
        <Button type="primary" href="/scan" target="_blank">
          Get Started
        </Button>
      </Flex>
      </Flex>
      </Card>
      <p>Thank you for your interest in HeadshotGuardian. We value your feedback, inquiries, and suggestions. Whether you have questions about our services, need assistance with using our platform, or want to explore partnership opportunities, our team is here to assist you.</p>
    </div>
    </div>
    
    
    <div>
    <div style={contentStyle}>
      <h2>Contact Information:</h2>
      <span>
      <h3>Email:</h3>
      <h3>Phone:</h3>
      <h3>Address:</h3>
      </span>
    </div>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    
  </Carousel>
    
  </WithNavigation>;
}
