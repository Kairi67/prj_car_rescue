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
  return (
    <Routes />
    // <BrowserRouter>
    //   <LayoutWrapper>
    //     <Layout.Sider
    //       width={240}
    //       collapsible
    //       trigger={null}
    //       collapsed={collapse}
    //       style={{
    //         overflow: 'auto',
    //         height: '100vh',
    //         position: 'fixed',
    //         left: 0,
    //       }}
    //     >
    //       <SideNav />
    //     </Layout.Sider>
    //     <Layout>
    //       <Layout.Content
    //         style={{
    //           margin: '24px 16px 24px 220px',
    //           padding: 24,
    //           background: '#fff',
    //         }}
    //       >
    //         <Switch>
    //           <Route path='/' component={Home} />
    //           <Route path='/member' component={Member} />
    //           <Route path='/login' component={Login} />
    //           {/* <Redirect from='/' to='/product' /> */}
    //         </Switch>
    //       </Layout.Content>
    //     </Layout>
    //   </LayoutWrapper>
    // </BrowserRouter>
  );
}

export default App;
