import { useState } from 'react';
import { useNavigate } from '@remix-run/react';
import type { MenuProps } from 'antd';
import { Menu, Space } from 'antd';
import * as antIcons from '@ant-design/icons';
import logo from '../images/logo.svg';

const { HomeOutlined, QuestionCircleOutlined, ContactsOutlined, UserOutlined } =
  antIcons;

export function WithNavigation({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const [currentRoute, setCurrentRoute] = useState('/');

  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key, { relative: 'route' });
    setCurrentRoute(e.key);
  };

  return (
    <>
      <Menu onClick={onClick} selectedKeys={[currentRoute]} mode='horizontal'>
        <Menu.ItemGroup style={{ display: 'flex', alignItems: 'center' }}>
          <Menu.Item key='/'>
            <Space>
              <img
                className='ant-menu-item'
                src={logo}
                alt='authentiscan-logo'
                width={75}
                height={75}
              />
              Authentiscan
            </Space>
          </Menu.Item>
        </Menu.ItemGroup>

        <Menu.ItemGroup style={{ marginLeft: 'auto' }}>
          <Menu.Item key='/'>
            <Space>
              <HomeOutlined />
              Home
            </Space>
          </Menu.Item>

          <Menu.Item key='/about'>
            <Space>
              <QuestionCircleOutlined />
              About
            </Space>
          </Menu.Item>

          <Menu.Item key='/contact'>
            <Space>
              <ContactsOutlined />
              Contact
            </Space>
          </Menu.Item>

          <Menu.Item key='/team'>
            <Space>
              <UserOutlined />
              Team
            </Space>
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu>
      {children}
    </>
  );
}
