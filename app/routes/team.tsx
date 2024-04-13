import { Col, Row, Card, Divider, Space, Typography } from 'antd';
import { WithNavigation } from '../components/WithNavigation';

const { Title } = Typography;

const { Meta } = Card;

interface TeamMember {
  name: string;
  imageUri: string;
}

export default function Team() {
  const teamMembers: TeamMember[] = [
    {
      name: 'Joel',
      imageUri: 'app/images/placeholder.jpeg',
    },
    {
      name: 'Aman',
      imageUri: 'app/images/placeholder.jpeg',
    },
    {
      name: 'Hassaan',
      imageUri: 'app/images/placeholder.jpeg',
    },
    {
      name: 'Mathew',
      imageUri: 'app/images/mathew.png',
    },
    {
      name: 'Baldeep',
      imageUri: 'app/images/placeholder.jpeg',
    },
    {
      name: 'Abhishek',
      imageUri: 'app/images/abhishek.png',
    },
    {
      name: 'Sneha',
      imageUri: 'app/images/placeholder.jpeg',
    },
    {
      name: 'Rithwik',
      imageUri: 'app/images/rithwik.png',
    },
    {
      name: 'Jini',
      imageUri: 'app/images/placeholder.jpeg',
    },
    {
      name: 'Obitha',
      imageUri: 'app/images/placeholder.jpeg',
    },
    {
      name: 'Rajesh',
      imageUri: 'app/images/rajesh.png',
    },
    {
      name: 'Sweatha',
      imageUri: 'app/images/placeholder.jpeg',
    },
    {
      name: 'Arshia',
      imageUri: 'app/images/placeholder.jpeg',
    },
    {
      name: 'Govind',
      imageUri: 'app/images/govind.png',
    },
  ];

  const renderTeamMember = (member: TeamMember) => {
    return (
      <Col span={6} key={member.name}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt={member.name} src={member.imageUri} />}
        >
          <Meta title={member.name} />
        </Card>
      </Col>
    );
  };

  return (
    <WithNavigation>
      <Title level={2} style={{ marginBottom: '20px', textAlign: 'center' }}>
        <Space align='center'>Teams</Space>
      </Title>
      <Row gutter={[16, 16]}>
        {teamMembers.map((member, index) => {
          return (
            <>
              {renderTeamMember(member)}
              {(index + 1) % 4 === 0 && <Divider />}
            </>
          );
        })}
      </Row>
    </WithNavigation>
  );
}
