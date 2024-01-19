import React from 'react';
import { actionTrackerReport } from 'front-monitor-sdk';

const page1 = () => {
  return (
    <div>
      <h1>行为日志</h1>
      {/* 手动埋点 */}
      <button
        style={{ 'margin-right': '20px' }}
        data-no="yes"
        onClick={() => actionTrackerReport('button', '手动埋点被点击了')}
      >
        手动埋点
      </button>
      {/* 属性埋点 */}
      <button
        data-target="属性埋点被点击了"
        style={{ 'margin-right': '20px' }}
      >
      属性埋点
      </button>
      {/* 自动埋点 */}
      <button>
        自动埋点
      </button>
    </div>
  )
};


export default page1;
