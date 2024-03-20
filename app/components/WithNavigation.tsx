import { useState } from 'react';
import { useNavigate } from '@remix-run/react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import * as antIcons from '@ant-design/icons';
import logo from '../images/logo.svg';

const { HomeOutlined, QuestionCircleOutlined, ContactsOutlined } = antIcons;

export function WithNavigation({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const [current, setCurrent] = useState('home');

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    navigate(e.key);
  };

  return (
    <>
      <Menu onClick={onClick} selectedKeys={[current]} mode='horizontal'>
        <Menu.ItemGroup>
          <Menu.Item key='brand'>
            <img
              className='ant-menu-item'
              src={logo}
              alt='authentiscan-logo'
              width={65}
              height={65}
            />
            Authentiscan
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
        </Menu.ItemGroup>
      </Menu>
      {children}
    </>
  );
}
