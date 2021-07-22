import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import { Avatar } from 'antd';
import { ButtonPrimary } from '../../components/modules';
import { UserOutlined } from '@ant-design/icons';
const HeaderWrp = styled.div`
  width: 100%;
  background: linear-gradient(-90deg, #2f54eb, #3b96b7);
  color: #fff;
  padding: 12px 5px;
  .inner {
    min-width: 1000px;
    width: 100%;
    padding: 0 9px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  .version {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 0;
    margin-right: 40px;
    line-height: 1;
  }
  .versionText {
    display: block;
    font-size: 12px;
    margin-bottom: 7px;
  }
  .buttonsNew {
    display: flex;
    flex-direction: column;
    button {
      margin-bottom: 4px;
      padding-right: 20px;
      padding-left: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .downloads {
    margin-left: 20px;
    margin-right: 20px;
    padding: 7px 20px;
    /* background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px; */
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
    .downloadsHeading {
      font-size: 12px;
      margin-bottom: 5px;
    }
    button {
      margin-right: 15px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .user {
    display: flex;
    margin-left: auto;
    margin-right: 20px;
    align-items: center;
    &Name {
      margin-left: 7px;
      margin-bottom: 0;
    }
  }
`;

export default function Header({ versionName, children }) {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <HeaderWrp>
      <div className='inner'>
        <p className='version'>
          <span className='versionText'>現在表示中のバージョン</span>
          {versionName}
        </p>
        {children}
        <div className='user'>
          <Avatar
            style={{
              backgroundColor: 'transparent',
              border: '2px solid #fff',
              height: '34px',
              width: '34px',
            }}
            icon={<UserOutlined />}
          />
          <p className='userName'>admin</p>
        </div>
        {isAuthenticated ? (
          <ButtonPrimary
            onClick={() => {
              logout({ returnTo: window.location.origin });
            }}
          >
            ログアウト
          </ButtonPrimary>
        ) : (
          <ButtonPrimary
            onClick={() => {
              loginWithRedirect({ returnTo: window.location.origin });
            }}
          >
            ログイン
          </ButtonPrimary>
        )}
      </div>
    </HeaderWrp>
  );
}
