import { useState } from 'react';
import { useNavigate } from '@remix-run/react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import * as antIcons from '@ant-design/icons';
import logo from '../images/logo.svg';

const { HomeOutlined, QuestionCircleOutlined, ContactsOutlined, UserOutlined } =
  antIcons;

export function WithNavigation({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const [current, setCurrent] = useState('home');

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    navigate(e.key, { relative: 'route' });
  };

  return (
    <>
      <Menu onClick={onClick} selectedKeys={[current]} mode='horizontal'>
        <Menu.ItemGroup style={{ display: 'flex', alignItems: 'center' }}>
          <Menu.Item key='brand'>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <img
                className='ant-menu-item'
                src={logo}
                alt='authentiscan-logo'
                width={75}
                height={75}
              />
              Authentiscan
            </span>
          </Menu.Item>
        </Menu.ItemGroup>

        <Menu.ItemGroup style={{ marginLeft: 'auto' }}>
          <Menu.Item key='home'>
            <HomeOutlined />
            Home
          </Menu.Item>

          <Menu.Item key='about'>
            <QuestionCircleOutlined />
            About
          </Menu.Item>

          <Menu.Item key='contact'>
            <ContactsOutlined />
            Contact
          </Menu.Item>

          <Menu.Item key='team'>
            <UserOutlined />
            Team
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu>
      {children}
    </>
  );
}
