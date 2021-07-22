import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
// import { rootPath, envList } from '../../../constants';
import Header from '../../components/template/header.js';
import {
  TableLineup,
  ButtonDefault,
  ButtonSub,
} from '../../components/modules';

const Wrapper = styled.div`
  min-height: 600px;
`;

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const HomePage = () => {
  const { user } = useAuth0();
  console.log(user);

  return (
    <Wrapper>
      <Header versionName='ver.210701_temp'>
        <div className='buttonsNew'>
          <ButtonDefault>JSONアップロード</ButtonDefault>
          <ButtonDefault>履歴をから閲覧編集・新規作成</ButtonDefault>
        </div>
        <div className='downloads'>
          <p className='downloadsHeading'>ダウンロード</p>
          <ButtonSub>CSV</ButtonSub>
          <ButtonSub>JSON</ButtonSub>
        </div>
      </Header>
      <TableLineup dataSource={dataSource} columns={columns} />
    </Wrapper>
  );
};

export default HomePage;
