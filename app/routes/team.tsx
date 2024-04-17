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
      imageUri: 'app/images/aman.png',
    },
    {
      name: 'Hassaan',
      imageUri: 'app/images/hassan.png',
    },
    {
      name: 'Mathew',
      imageUri: 'app/images/mathew.png',
    },
    {
      name: 'Baldeep',
      imageUri: 'app/images/baldeep.png',
    },
    {
      name: 'Abhishek',
      imageUri: 'app/images/abhishek.png',
    },
    {
      name: 'Sneha',
      imageUri: 'app/images/sneha.png',
    },
    {
      name: 'Rithwik',
      imageUri: 'app/images/rithwik.png',
    },
    {
      name: 'Jini',
      imageUri: 'app/images/jini.png',
    },
    {
      name: 'Obitha',
      imageUri: 'app/images/obitha.png',
    },
    {
      name: 'Rajesh',
      imageUri: 'app/images/rajesh.png',
    },
    {
      name: 'Sweatha',
      imageUri: 'app/images/sweatha.png',
    },
    {
      name: 'Arshia',
      imageUri: 'app/images/arshia.png',
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
      <Title code level={2} style={{ marginBottom: '20px', textAlign: 'center' }}>
        <Space align='center'>Team</Space>
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
