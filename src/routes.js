import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Member from './pages/Member';
import Login from './pages/Login';

const RouteComponent = () => {
  return (
    <BrowserRouter>
      <Route exact path={`/home`} component={Login} />
      <Route exact path={`/`} component={Home} />
      <Route exact path={`/member`} component={Member} />
    </BrowserRouter>
  );
};

RouteComponent.displayName = 'RouteComponent';

export default RouteComponent;
