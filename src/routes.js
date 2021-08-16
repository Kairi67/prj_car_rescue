import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Layout } from 'antd';
import DataOrigin from 'src/controller/dataOrigin';

import Home from './pages/Home';
import Member from './pages/Member';
import AppHeader from './components/template/header';
import AppSideNav from './components/template/sidenav';

const RouteComponent = () => {
  const { isAuthenticated } = useAuth0();
  const [dateTime, setDateTime] = useState('');

  return (
    <Layout>
      <DataOrigin>
        <AppHeader onChangeDateTime={() => setDateTime} />
        <Layout>
          <BrowserRouter>
            {isAuthenticated ? (
              <>
                <AppSideNav />
                <Route exact path={`/`} component={Home} />
                <Route exact path={`/member`} component={Member} />
              </>
            ) : null}
          </BrowserRouter>
        </Layout>
      </DataOrigin>
      <Layout.Footer style={{ textAlign: 'center' }}>
        カーレスキュー静清 ©2021 Created by 渡辺モータース商会
      </Layout.Footer>
    </Layout>
  );
};

RouteComponent.displayName = 'RouteComponent';

export default RouteComponent;
