import { useNavigate } from '@remix-run/react';
import type { MetaFunction } from '@remix-run/node';
import { Col, Row, Image, Typography, Button } from 'antd';
import { WithNavigation } from '../components/WithNavigation';
import humanoid from '../images/humanoid.svg';

const { Title } = Typography;

export const meta: MetaFunction = () => {
  return [
    { title: 'Authentiscan Dashboard' },
    { name: 'description', content: 'Welcome to Authentiscan Dashboard!' },
  ];
};

export default function Index() {
  const navigate = useNavigate();
  return (
    <WithNavigation>
      <Row gutter={12} justify='center'>
        <Col
          span={12}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Title level={2}>Authentiscan</Title>
          <Title level={4}>
            Diving Deep: Detecting the digital doppelganger
          </Title>
          <Row gutter={24}>
            <Col span={12}>
              <Button onClick={() => navigate('/scan')}>Get Started</Button>
            </Col>
            <Col span={12}>
              <Button>Read More</Button>
            </Col>
          </Row>
        </Col>
        <Col
          span={12}
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Image src={humanoid} width={400} preview={false} />
        </Col>
      </Row>
    </WithNavigation>
  );
}
