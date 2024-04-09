import { WithNavigation } from '../components/WithNavigation';
import { Typography, Space, Divider } from 'antd';

const { Title, Paragraph } = Typography;

export default function About() {
  return (
    <WithNavigation>
      <Title level={2} style={{ marginBottom: '20px', textAlign: 'center' }}>
        <Space align='center'>About</Space>
      </Title>
      <Divider />
      <Paragraph>
        <pre>
          Welcome to Authentiscan, the ultimate tool for identifying fake images
          of people generated by AI. In today's digital age, the proliferation
          of AI-generated content has posed significant challenges in discerning
          what's real from what's not. With the rise of deep learning
          algorithms, anyone can create synthetic images that are
          indistinguishable from reality, leading to potential misuse and
          deception.
        </pre>
      </Paragraph>
      <Paragraph>
        <pre>
          At Authentiscan, we are dedicated to combating this issue by providing
          a powerful and user-friendly tool to help users detect AI-generated
          fake images of people. Our platform utilizes cutting-edge technology
          and sophisticated algorithms to analyze various aspects of an image,
          enabling users to make informed judgments about its authenticity. Our
          mission is to empower individuals, businesses, and organizations with
          the knowledge and tools they need to navigate the digital landscape
          safely and responsibly. Whether you're a journalist, a social media
          user, or a cybersecurity professional, our platform equips you with
          the means to identify manipulated images effectively.
        </pre>
      </Paragraph>
    </WithNavigation>
  );
}
