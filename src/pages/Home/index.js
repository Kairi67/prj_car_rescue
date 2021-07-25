import React, { useState, useEffect } from 'react';
import {
  Layout,
  Table,
  DatePicker,
  Modal,
  Space,
  Typography,
  Button,
  Menu,
} from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
// import { rootPath, envList } from '../../../constants';
import Header from '../../components/template/header.js';
import { table, minifyRecords } from '../../api';
import {
  TableLineup,
  ButtonDefault,
  ButtonSub,
} from '../../components/modules';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const ModalFooterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  .rightBtn {
    display: flex;
    justify-content: flex-end;
  }
`;

const InnerSection = styled.div`
  margin-bottom: -10px;
  > .item {
    margin-bottom: 10px;
  }
`;

const columns = [
  {
    title: '番号',
    dataIndex: 'key',
  },
  {
    title: '日時',
    dataIndex: 'タイムゾーン',
  },
  {
    title: '依頼会社',
    dataIndex: '依頼会社',
    key: '依頼会社',
  },
  {
    title: '時間',
    dataIndex: '時間',
    key: '時間',
  },
  {
    title: '車種',
    dataIndex: '車種',
    key: '車種',
  },
  {
    title: '出勤場所',
    dataIndex: '出勤場所',
    key: '出勤場所',
  },
  {
    title: '輸送先',
    dataIndex: '輸送先',
    key: '輸送先',
  },
  {
    title: '作業者',
    dataIndex: '作業者',
    key: '作業者',
  },
  {
    title: '出勤者',
    dataIndex: '出勤者',
    key: '出勤者',
  },
];

const HomePage = () => {
  const { user } = useAuth0();
  const [itemList, setItemList] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [dateTime, setDateTime] = useState('');

  console.log(user);

  useEffect(() => {
    handleGetRecordsAction();
  }, []);

  const handleGetRecordsAction = async () => {
    await table.select({ maxRecords: 50 }).eachPage((response) => {
      const itemList = response.map((item) => item.fields);
      setItemList(itemList);
    });
  };

  return (
    itemList && (
      <Layout>
        <Header />
        <Layout>
          <Sider width={200} className='site-layout-background'>
            <Menu
              mode='inline'
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item key='1' onClick={() => setModalState(true)}>
                報告メニュー
              </Menu.Item>
              <Menu.Item key='2' onClick={() => setModalState(true)}>
                カレンダー
              </Menu.Item>
              <Menu.Item key='3'>隊員リスト</Menu.Item>
            </Menu>
          </Sider>
          <Layout
            className='site-layout-background'
            style={{ padding: '48px' }}
          >
            <Typography.Title level={3}>現在日</Typography.Title>
            <Table
              pagination={{ pageSize: 50 }}
              dataSource={itemList}
              columns={columns}
            />
          </Layout>

          <Modal
            title='表示基準日変更'
            visible={modalState}
            closable={false}
            footer={
              <ModalFooterWrap>
                <div>
                  <Button
                    key='Cancel'
                    onClick={() => {
                      setModalState(false);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    key='okChangeDate'
                    type='primary'
                    onClick={() => {
                      setModalState(false);
                    }}
                  >
                    選択日時に変更
                  </Button>
                </div>
              </ModalFooterWrap>
            }
          >
            <InnerSection>
              <div className='item'>
                <div className='title'>表示基準日</div>
              </div>
              <div className='item'>
                <Space>
                  <DatePicker
                    placeholder='YYYY-MM-DD'
                    format='YYYY-MM-DD'
                    // showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                    onChange={(dateTime) => {
                      setDateTime(dateTime);
                    }}
                  />
                </Space>
              </div>
            </InnerSection>
          </Modal>
        </Layout>
      </Layout>
    )
  );
};

export default HomePage;
