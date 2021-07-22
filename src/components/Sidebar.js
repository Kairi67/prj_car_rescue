import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Menu } from 'antd';
import { MoneyCollectOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const AppTitle = styled.div`
  height: 32px;
  margin: 36px 16px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
`;

const MenuTitle = styled(Menu.Item)`
  padding: 36px 24px !important;
  span {
    font-size: 18px;
  }
`;

const SideNav = (props) => {
  const history = useHistory();
  // const location = useLocation();

  const handleLinkToAction = (path) => {
    history.push(path);
  };

  return (
    <div>
      <AppTitle>カーレスキュー静清</AppTitle>
      <Menu
        theme='dark'
        mode='inline'
        // defaultSelectedKeys={[location.pathname]}
      >
        <MenuTitle
          key='/'
          onClick={() => {
            handleLinkToAction('/');
          }}
        >
          <ShoppingCartOutlined style={{ fontSize: '24px' }} />
          <span> 出動リスト</span>
        </MenuTitle>
        <MenuTitle
          key='/member'
          onClick={() => {
            handleLinkToAction('/member');
          }}
        >
          <MoneyCollectOutlined style={{ fontSize: '24px' }} />
          <span> メンバーリスト</span>
        </MenuTitle>
      </Menu>
    </div>
  );
};

export default SideNav;
