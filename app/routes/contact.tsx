import { WithNavigation } from '../components/WithNavigation';
import { Button, Card, Flex, Typography } from 'antd';
import { Carousel } from 'antd';

const cardStyle: React.CSSProperties = {
  width: 1200,
  height: 350,
  margin: "auto",
};

const imgStyle: React.CSSProperties = {
  display: 'block',
  width: 400,
  height: 350,
  
};
const contentStyle: React.CSSProperties = {
  height: '550px',
  color: '#000',
  lineHeight: '120px',
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
      <h2>Contact Information</h2>
      <Card hoverable style={cardStyle} styles={{ body: { padding: 0, overflow: 'hidden' } }}>
      <Flex justify="space-between">
      <img
        alt="avatar"
        src="app\images\humanoid.svg"
        style={imgStyle}
      />
      <Flex direction="column" align="start" justify="space-between" style={{ padding: 20 }}>
        <div>
        <h3>Email:</h3>
        <a href="">authentiscan@gmail.com</a>
        <p>Feel free to drop us an email anytime. Our dedicated support team will respond promptly to address your queries.</p>
        <h3>Phone:</h3>
        <a href="">+1 4856996554</a>
        <p>You can reach us via phone during our business hours, Monday to Friday, 9:00 AM to 5:00 PM (EST). We're here to provide assistance and answer any questions you may have.</p>
        </div>
      </Flex>
      </Flex>
      </Card>
    </div>
    </div>
    <div>
    <div style={contentStyle}>
    <h2>Connect with Us on Social Media:</h2>
      <Card hoverable style={cardStyle} styles={{ body: { padding: 0, overflow: 'hidden' } }}>
      <Flex justify="space-between">
      <img
        alt="avatar"
        src="app\images\humanoid.svg"
        style={imgStyle}
      />
      <Flex direction="column" align="start" justify="space-between" style={{ padding: 20 }}>
        <div>

          <p>Stay updated on the latest news, announcements, and tips by following us on social media. Join our community and engage with like-minded individuals passionate about combating digital deception.</p>
        <h3>Facebook:</h3>
        <a href="">authentiscan@gmail.com</a>
        <h3>LinkedIn:</h3>
        <a href="">+1 4856996554</a>
        <h3>Instagram:</h3>
        <a href="">+1 4856996554</a>
        </div>
      </Flex>
      </Flex>
      </Card>
    </div>
    </div>
    <div>
    <div style={contentStyle}>
      <h2>Techincal support:</h2>
      <Card hoverable style={cardStyle} styles={{ body: { padding: 0, overflow: 'hidden' } }}>
      <Flex justify="space-between">
      <img
        alt="avatar"
        src="app\images\humanoid.svg"
        style={imgStyle}
      />
      <Flex direction="column" align="start" justify="space-between" style={{ padding: 20 }}>
        <div>
        <h2>Support Center:</h2>
          <p>For technical assistance, troubleshooting, or any issues related to our platform, please visit our Support Center. Our comprehensive knowledge base provides step-by-step guides and solutions to common queries.</p>
          <h2>Feedback and suggestion:</h2>
        <p>We value your input and strive to continuously improve our services. If you have any feedback, suggestions, or ideas for enhancements, please let us know. Your insights are invaluable in helping us deliver the best possible experience to our users.</p>
        </div>
        
      </Flex>
      </Flex>
      </Card>
    </div>
    </div>
    
    
  </Carousel>
    
  </WithNavigation>;
}
