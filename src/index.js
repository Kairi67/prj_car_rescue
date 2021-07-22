import React from 'react';
import ReactDOM from 'react-dom';
import Auth0ProviderWithHistory from './auth';
import App from './App';
import 'antd/dist/antd.css';

ReactDOM.render(
  <Auth0ProviderWithHistory>
    <App />
  </Auth0ProviderWithHistory>,
  document.getElementById('root')
);
