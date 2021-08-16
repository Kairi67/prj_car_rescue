import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Menu, Layout } from 'antd';
import {
  LaptopOutlined,
  UserOutlined,
  NotificationOutlined,
} from '@ant-design/icons';

const MenuTitle = styled(Menu.Item)`
  padding: 32px 24px !important;
  span {
    font-size: 18px;
  }
`;

const SideNav = ({ setModalState }) => {
  const history = useHistory();

  const handleLinkToAction = (path) => {
    history.push(path);
  };

  return (
    <Layout.Sider
      width={220}
      className='site-layout-background'
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <Menu
        mode='inline'
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <MenuTitle
          key='1'
          icon={<LaptopOutlined />}
          onClick={() => handleLinkToAction('/')}
        >
          出動一覧
        </MenuTitle>
        <MenuTitle
          key='2'
          icon={<UserOutlined />}
          onClick={() => handleLinkToAction('/member')}
        >
          隊員一覧
        </MenuTitle>
        <MenuTitle
          key='3'
          icon={<NotificationOutlined />}
          onClick={() => window.open('https://airtable.com/shrLO18VmudjJVjTd')}
        >
          出動報告
        </MenuTitle>
      </Menu>
    </Layout.Sider>
  );
};

export default SideNav;
