import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './application/App';
import {BrowserRouter} from "react-router-dom";
import {ConfigProvider} from "antd";
import zhCN from 'antd/locale/zh_CN';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ConfigProvider locale={zhCN}>
      <App/>
    </ConfigProvider>
  </BrowserRouter>
);
