import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Routes from './routes';
import Home from './pages/Home';
import Member from './pages/Member';
import Login from './pages/Login';
import SideNav from './components/Sidebar';
import { Layout } from 'antd';

const LayoutWrapper = styled(Layout)`
  height: 100vh;
  width: 100%;
  @media (max-width: 768px) {
    display: block;
    padding: 20px;
  }
`;

function App() {
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    window.innerWidth <= 760 ? setCollapse(true) : setCollapse(false);
  }, []);
  return <Routes />;
}

export default App;
