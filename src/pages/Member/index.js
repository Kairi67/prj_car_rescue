import React, { useState, useEffect } from "react";
import {
  Layout,
  Table,
  DatePicker,
  Modal,
  Space,
  Typography,
  Button,
  Menu,
} from "antd";
import { UserOutlined } from "@ant-design/icons";

import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { memberListColumn } from "../../constants/column";
// import { rootPath, envList } from '../../../constants';
import Header from "../../components/template/header";
import SideNav from "../../components/template/sidenav";
import { table2, minifyRecords } from "../../api";
import {
  TableLineup,
  ButtonDefault,
  ButtonSub,
} from "../../components/modules";

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

const MemberPage = () => {
  const { user } = useAuth0();
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    handleGetRecordsAction();
  }, []);

  const handleGetRecordsAction = async () => {
    await table2.select({ maxRecords: 50 }).eachPage((response) => {
      const itemList = response.map((item) => item.fields);
      setItemList(itemList);
    });
  };

  return (
    itemList && (
      <Layout.Content
        className="site-layout-background"
        style={{
          marginLeft: 240,
          padding: "90px 36px 0px",
          minHeight: "100vh",
        }}
      >
        <Typography.Title level={3}>隊員リスト</Typography.Title>
        <Table
          pagination={{ pageSize: 100 }}
          dataSource={itemList}
          columns={memberListColumn}
        />
      </Layout.Content>
    )
  );
};

export default MemberPage;
