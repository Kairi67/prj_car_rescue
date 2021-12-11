import React, { useState, useEffect } from "react";
import styled from "styled-components";
import moment from "moment";
import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, DatePicker, Modal, Space, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { interval } from "rxjs";
import dayjs from "dayjs";
import ja from "dayjs/locale/ja";
import { ButtonPrimary, ButtonDefault } from "../../components/modules";
dayjs.locale(ja);

const HeaderWrp = styled.div`
  width: 100%;
  background: linear-gradient(-90deg, #2f54eb, #3b96b7);
  color: #fff;
  padding: 12px 5px;
  position: fixed;
  z-index: 9999;
  .inner {
    min-width: 1000px;
    width: 100%;
    padding: 0 9px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  .version {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 0;
    margin-right: 40px;
    line-height: 1;
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

const InnerSection = styled.div`
  margin-bottom: -10px;
  > .item {
    margin-bottom: 10px;
  }
`;

export default function Header({ children }) {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [date, setDate] = useState(new Date());
  const [dateTime, setDateTime] = useState("");
  const [referenceDateTime, setReferenceDateTime] = useState("");
  const [modalState, setModalState] = useState(false);

  useEffect(() => {
    const subscription = interval(1000).subscribe(() => {
      setDate(new Date());
    });
    return () => subscription.unsubscribe();
  }, []);

  const fixDisplayTime = (num) => {
    let ret;
    num < 10 ? (ret = "0" + num) : (ret = num);
    return ret;
  };

  const settingDateTime = (setDateTime) => {
    const dateIsValid = moment(setDateTime).isValid();
    const newDateTime = dateIsValid
      ? moment(setDateTime).format("YYYY-MM-DD")
      : "";
    setReferenceDateTime(newDateTime);
  };

  return (
    <HeaderWrp>
      <div className="inner">
        <p className="version">カーレスキュー静清</p>
        <p className="version">
          {`${fixDisplayTime(date.getHours())}:${fixDisplayTime(
            date.getMinutes()
          )}:${fixDisplayTime(date.getSeconds())}`}
        </p>
        {children}
        <ButtonDefault onClick={() => setModalState(true)}>
          表示日変更
        </ButtonDefault>
        <Modal
          title="表示基準日変更"
          visible={modalState}
          closable={false}
          footer={
            <div>
              <Button
                key="Cancel"
                onClick={() => {
                  setModalState(false);
                }}
              >
                キャンセル
              </Button>
              <Button
                key="okChangeDate"
                type="primary"
                onClick={() => {
                  settingDateTime(dateTime);
                  setModalState(false);
                }}
              >
                選択日時に変更
              </Button>
            </div>
          }
        >
          <InnerSection>
            <div className="item">
              <div className="title">表示基準日</div>
            </div>
            <div className="item">
              <Space>
                <DatePicker
                  placeholder="YYYY/MM/DD"
                  format="YYYY/MM/DD"
                  showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
                  onChange={(dateTime) => {
                    setDateTime(dateTime);
                  }}
                />
              </Space>
            </div>
          </InnerSection>
        </Modal>
        <div className="user">
          <Avatar
            style={{
              backgroundColor: "transparent",
              border: "2px solid #fff",
              height: "34px",
              width: "34px",
            }}
            icon={<UserOutlined />}
          />
          <p className="userName">admin</p>
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
