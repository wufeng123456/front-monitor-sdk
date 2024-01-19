# front-monitor-sdk

前端监控SDK

行为、错误、PV/UV、性能（TODO）

# 快速开始

#### 安装sdk

```bash
npm i front-monitor-api
```

#### 初始化监控

```javascript
import { init } from 'front-monitor-sdk'

init({
  appId: 'react0001', // 项目id
  userId: 'user0008', // 用户id
  reportUrl: 'http://localhost:3009/report/actions', // 日志上报url
  autoActionTracker: false, // 操作日志是否开启自动采集
  delay: 0, // 延迟并且合并上传
  hashPage: false, // 是否hash路由
  errorReport: true // 是否开启错误上报
})
```

#### Methods

```javascript
import { init, errorCaptcher, actionTrackerReport } from 'front-monitor-sdk'

/**
 * param1 错误内容
 * param2 错误描述
 */
errorCaptcher(param1, param2)

/**
 * param1 操作类型
 * param2 操作描述
 * 操作日志：主动采集、属性采集、自动采集
 * 主动采集：在标签上添加data-no="xx", 避免重复上报
 * 属性采集：在标签上添加data-target="xx"
 * 无痕采集：随便点击都会被采集
 */
actionTrackerReport(param1, param2)
```

#### 日志上报格式

```javascript
const logParams = {
  appId, //项目id
  userId, // 用户id
  type, // error|action|visit|user
  data: params,
  currentTime: new Date().getTime(), // 时间戳
  currentPage: window.location.href, // 当前页面
  ua: navigator.userAgent // ua信息
}
```

#### 监控拓扑图

![Alt text](%E5%89%8D%E7%AB%AF%E7%9B%91%E6%8E%A7%E6%8B%93%E6%89%91.png)