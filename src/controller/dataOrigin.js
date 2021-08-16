import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';
import { DataOriginContext } from './dataOriginContext';
import { orderTable } from 'src/api';
import popupMessage from 'src/components/modules/popupMessage';

const LoadingSpin = styled(Spin)`
  transform: translateY(50%);
  height: 100vh !important;
  top: 0% !important;
`;

const BaseContainer = ({ children, history }) => {
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleGetRecordsAction();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleGetRecordsAction = async () => {
    try {
      dataLoadingAction(true);
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
          dataLoadingAction(false);
        });
    } finally {
      dataLoadingAction(false);
    }
  };
  const dataLoadingAction = (value) => {
    setLoading(value);
  };

  return (
    <LoadingSpin spinning={loading} tip='Loading...'>
      {itemList ? (
        <DataOriginContext.Provider
          value={{
            itemList,
            dataLoadingAction: dataLoadingAction,
            handleGetRecordsAction: handleGetRecordsAction,
          }}
        >
          {children}
        </DataOriginContext.Provider>
      ) : null}
    </LoadingSpin>
  );
};

export default BaseContainer;
