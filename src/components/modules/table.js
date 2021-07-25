import styled from 'styled-components';
import { Table } from 'antd';

const TableLineupComponent = styled(Table)`
  margin: 30px;
  border: 1px solid #CDD6DD;
  .ant-table-thead > tr > th,
  .ant-table-tbody > tr > td {
      border-right: 1px solid #CDD6DD;
      border-color: #CDD6DD;
    }
  }
  .ant-table-thead > tr > th {
    background-color: #f0f3f5;
  }
  tr:nth-child(even) {
    td {
      background-color: #fafafa;
    }
  }
`;

export default function TableLineup({ dataSource, columns }) {
  return <TableLineupComponent dataSource={dataSource} columns={columns} />;
}
