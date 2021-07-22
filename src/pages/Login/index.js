import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import {
  Typography,
  Input,
  Space,
  Button,
  Card,
  Divider,
  Select,
  Radio,
} from 'antd';
import { DoubleRightOutlined } from '@ant-design/icons';
const { Paragraph } = Typography;

const selectInputValue = {
  masterTypeSv: '', // 納車 or 車両 マスターSV int 1:納車,2:車両 //TODO:APIにないけど、一旦記載
  email: '', // メールアドレス mail 255文字
  password: '', // パスワード String 71文字
};

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  const [viewSelectInputValue, setSelectInputValue] = useState({
    ...selectInputValue,
  });

  const handleChangeValue = (key, value) => {
    viewSelectInputValue[key] = value;
    setSelectInputValue({ ...viewSelectInputValue });
  };

  return (
    <Wrapper>
      {/* TODO:モックツールや車両マスターにはあるので、一旦ロゴ画像配置 */}
      <Paragraph>
        {/* <Logo>
          <img src={`/watamo_logo.png`} alt='KINTO' width='150px' />
        </Logo> */}
      </Paragraph>
      <InputWrapper>
        <CustomCard>
          <Typography>
            <Lead>マスター管理ツール</Lead>
          </Typography>
          <CustomParagraph>
            <CustomSpace>
              <Category>反映サーバー</Category>
              <Select
                defaultValue={'選択してください'}
                style={{ width: '100%', textAlign: 'left' }}

                // TODO:ローカル検証のため一時コメントアウト
                // onChange={(value) => handleSelectEnvAction(value)}
              >
                {/* {envList.map((target, index) => (
                  <Option value={target} key={index}>
                    {target}
                  </Option>
                ))} */}
              </Select>
            </CustomSpace>
          </CustomParagraph>
          <CustomParagraph>
            <CustomSpace>
              <Category>ユーザーID</Category>
              <InputLogin
                value={viewSelectInputValue.email}
                onChange={(element) => {
                  handleChangeValue('email', element.target.value);
                }}
                placeholder='email'
                style={{ width: '100%' }}
              />
            </CustomSpace>
          </CustomParagraph>
          <CustomParagraph>
            <CustomSpace>
              <Category>パスワード</Category>
              <InputLogin
                type='password'
                value={viewSelectInputValue.password}
                onChange={(element) => {
                  handleChangeValue('password', element.target.value);
                }}
                placeholder='password'
                style={{ width: '100%' }}
              />
            </CustomSpace>
          </CustomParagraph>
          <Divider />
          <Button
            type='primary'
            shape='round'
            icon={<DoubleRightOutlined />}
            onClick={() => {
              loginWithRedirect();
            }}
            onKeyDown={(e) => {
              if (e.keycode === 13) {
                loginWithRedirect();
              }
            }}
          >
            ログイン
          </Button>
        </CustomCard>
      </InputWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 12px;
  height: 100vh;
  min-height: 600px;
  text-align: center;
  background: #f0f0f0;
`;

const Lead = styled.div`
  margin-bottom: 30px;
  color: #707f89;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.4;
`;

const Category = styled.div`
  display: block;
  width: 84px;
  margin-right: 10px;
  text-align: right;
`;

const Logo = styled.div`
  padding-top: 110px;
`;

const InputWrapper = styled.div`
  width: 440px;
  padding: 10px 20px;
  margin: auto;
`;

const CustomCard = styled(Card)`
  border-radius: 5px;
`;

const CustomParagraph = styled(Paragraph)`
  width: 100%;
  text-align: left;
`;

const CustomSpace = styled(Space)`
  margin-bottom: 4px;
`;

const CustomRadio = styled(Radio)`
  margin-bottom: 4px;
`;

const InputLogin = styled(Input)`
  border-radius: 20px;
  padding: 4px 18px;
`;

const Footnote = styled.p`
  margin-top: 20px;
  margin-bottom: 0;
  font-size: 10px;
  color: #666;
`;

export default Login;
