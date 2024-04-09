import {Avatar} from 'antd';
import { Col, Row, Card, Divider, Space } from 'antd';
import { Typography } from "antd";

import { WithNavigation } from '../components/WithNavigation';
const { Title } = Typography;

const {Meta} = Card

export default function Team() {
  return <WithNavigation>
  <Title level={2} style={{ marginBottom: '20px', textAlign: 'center' }}>
    <Space align="center">Teams</Space></Title>
    <Row  gutter={[16, 16]}>   
      <Col span={6}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="app/images/placeholder.jpeg" />}>
          <Meta title="Joel"  />
          </Card>
      </Col>
      <Col span={6}>
      <Card 
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="app/images/placeholder.jpeg" />}>
          <Meta title="Aman"  />
          </Card>
      </Col>
      <Col span={6}>
      <Card 
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="app/images/placeholder.jpeg" />}>
          <Meta title="Hassaan"  />
          </Card>      </Col>
      <Col span={6}>
      <Card 
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="app/images/mathew.png" />}>
          <Meta title="Mathew"  />
          </Card>      </Col>
    </Row>
    <Divider />
    <Row  gutter={[16, 16]}>   
      <Col span={6}>
      <Card 
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="app/images/placeholder.jpeg" />}>
          <Meta title="Baldeep"  />
          </Card>      </Col>
      <Col span={6}>
      <Card 
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="app/images/abhishek.png" />}>
          <Meta title="Abhishek"  />
          </Card>      </Col>
      <Col span={6}>
      <Card 
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="app/images/placeholder.jpeg" />}>
          <Meta title="Sneha"  />
          </Card>      </Col>
      <Col span={6}>
      <Card 
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="app/images/rithwik.png" />}>
          <Meta title="Rithwik"  />
          </Card>      </Col>
    </Row>
    <Divider />
    <Row  gutter={[16, 16]}>   
      <Col span={6}>
      <Card 
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="app/images/placeholder.jpeg" />}>
          <Meta title="Jini"  />
          </Card>      </Col>
      <Col span={6}>
      <Card 
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="app/images/placeholder.jpeg" />}>
          <Meta title="Obitha"  />
          </Card>      </Col>
      <Col span={6}>
      <Card 
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="app/images/rajesh.png" />}>
          <Meta title="Rajesh"  />
          </Card>      </Col>
      <Col span={6}>
      <Card 
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="app/images/placeholder.jpeg" />}>
          <Meta title="Sweatha"  />
          </Card>      </Col> 
    </Row>

    <Divider />

    <Row  gutter={[16, 16]}>   
      <Col span={6}>
      <Card 
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="app/images/placeholder.jpeg" />}>
          <Meta title="Arshia"  />
          </Card>      </Col>
      <Col span={6}>
      <Card 
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="app/images/govind.png" />}>
          <Meta title="Govind"  />
          </Card>      </Col>
    </Row>
  </WithNavigation>;
}
