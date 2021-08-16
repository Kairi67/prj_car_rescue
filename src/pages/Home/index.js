import React, { useState, useEffect, useContext } from 'react';
import { Layout, Table, Typography, Button, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import ja from 'dayjs/locale/ja';
import { orderTable, minifyRecords } from '../../api';
import { addKey } from '../../utils';
import { orderListColumn } from '../../constants/column';
import { DataOriginContext } from 'src/controller/dataOriginContext';
dayjs.locale(ja);

const OrderPage = () => {
  // const { itemList } = useContext(DataOriginContext);
  // console.log(itemList);
  const [itemList, setItemList] = useState([]);
  const [dateTime, setDateTime] = useState(dayjs().format('YYYY/MM/DD'));

  useEffect(() => {
    handleGetRecordsAction();
  }, []);

  const handleGetRecordsAction = async () => {
    try {
      await orderTable
        .select({
          maxRecords: 50,
          filterByFormula: `SEARCH("",{日時})`,
        })
        .eachPage((response) => {
          const newItemList = response.map((item) => {
            const newRecord = item.fields;
            newRecord['target_id'] = item.id;
            return newRecord;
          });
          setItemList(newItemList);
        });
    } finally {
    }
  };

  const handleDeleteRecordAction = (id) => {
    orderTable.destroy([id]);
    // handleGetRecordsAction();
  };

  const showConfirm = (id) => {
    Modal.confirm({
      title: '本当に削除しますか？',
      icon: <ExclamationCircleOutlined />,
      content: '出勤情報を削除します。',
      onOk() {
        handleDeleteRecordAction(id);
        window.location.reload();
      },
    });
  };

  const columns = [
    ...orderListColumn,
    {
      title: '操作',
      dataIndex: '',
      key: 'x',
      render: (item) => {
        return (
          <Button onClick={() => showConfirm(item.target_id)}>削除</Button>
        );
      },
    },
  ];

  return (
    itemList && (
      <Layout.Content
        className='site-layout-background'
        style={{ marginLeft: 240, padding: '24px 36px 0px', minHeight: '90vh' }}
      >
        <Typography.Title level={3}>{`表示日：${dateTime}`}</Typography.Title>
        <Table
          pagination={{ pageSize: 100 }}
          dataSource={addKey(itemList)}
          columns={columns}
        />
      </Layout.Content>
    )
  );
};

export default OrderPage;
