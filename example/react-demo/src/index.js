import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { init } from 'front-monitor-sdk'
console.log(window.FrontMonitorSdk, 'FrontMonitorSdk')
// appId, // 项目id
// userId, // 用户id
// reportUrl, // 监控上报接口地址
// autoActionTracker, // 开启行为日志自动埋点
// delay, // 延迟并合并上报
// hashPage, // 是否hash路由
// errorReport // 是否开启错误监控
init({
  appId: 'react0001',
  userId: 'user0008',
  reportUrl: 'http://localhost:3009/report/actions',
  autoActionTracker: false,
  delay: 0,
  hashPage: false,
  errorReport: true,
  performanceReport: false,
  blankReport: true,
  rootElements: ['#root', '.App']
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
