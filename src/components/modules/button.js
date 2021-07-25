import styled from 'styled-components';
import { Button } from 'antd';
export const ButtonDefault = styled(Button)`
  border: 2px solid #004bb1;
  border-radius: 20px;
  color: #004bb1;
  height: 40px;
  padding: 4px 20px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  &:hover {
    color: #004bb1;
    border-color: #004bb1;
  }
`;

export const ButtonPrimary = styled(Button)`
  border: 2px solid #fff;
  border-radius: 20px;
  color: #fff;
  background-color: #004bb1;
  height: 40px;
  padding: 4px 20px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  &:hover {
    /* color: #004bb1;
    border-color: #004bb1; */
  }
`;

export const ButtonSub = styled(Button)`
  border: 2px solid #fff;
  border-radius: 20px;
  color: #fff;
  /* background-color: #004bb1; */
  background: transparent;
  height: 40px;
  padding: 4px 20px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  &:hover {
    /* color: #004bb1;
    border-color: #004bb1; */
  }
`;
