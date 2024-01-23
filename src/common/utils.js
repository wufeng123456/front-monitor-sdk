import { autoActionTrackerReport } from "./actionTracker"
import { errorTrackerReport } from "./errorTracker"
import { hashPageTrackerReport, historyPageTrackerReport } from "./pageTracker"
import { blankTrackerReport } from "./blankTracker"
import { performanceTrackerReport } from "./performanceTracker"
import { longTaskTrackerReport } from "./longTaskTracker"

export const loadConfig = (options) => {
  const {
    appId, // 项目id
    userId, // 用户id
    reportUrl, // 监控上报接口地址
    autoActionTracker, // 开启行为日志自动埋点
    delay, // 延迟并合并上报
    hashPage, // 是否hash路由
    errorReport, // 是否开启错误监控
    blankReport, // 是否开启白屏监控
    rootElements, // 开启白屏监控后，需传入判断白屏的元素标识，默认html、body
    performanceReport, // 开启性能监控
  } = options

  if (appId) window.__monitor_app_id__ = appId

  if (userId) window.__monitor_user_id__ = userId

  if (reportUrl) window.__monitor_report_url__ = reportUrl

  if (delay) window.__monitor_delay__ = delay

  // 开启错误监控
  if (errorReport) errorTrackerReport()

  // 开启白屏监控
  if (blankReport) blankTrackerReport(rootElements)

  // 开启性能监控
  if (performanceReport) {
    performanceTrackerReport()
    longTaskTrackerReport()
  }

  // 行为日志开启自动埋点
  if (autoActionTracker) autoActionTrackerReport()

  // 路由监听
  hashPage ? hashPageTrackerReport() : historyPageTrackerReport()
}

// 获取元素路径
export const getPath = (element) => {
  // 如果存在id唯一标识，返回id信息
  if (element.id) return `//*[@id="${element.id}"]`
  // body元素，返回tagname
  if (document.body === element) return element.tagName

  let ix = 0
  let siblings = element.parentNode ? element.parentNode.childNodes : []
  for (let i = 0; i < siblings.length; i++) {
    let sibling = siblings[i]
    if (sibling === element) {
      if (getPath(element.parentNode)) {
        return getPath(element.parentNode) + '/' + element.tagName + '[' + (ix + 1) + ']'
      } else {
        return element.tagName + '[' + (ix + 1) + ']'
      }
    }
    if (sibling.nodeType === 1 && sibling.tagName === element.tagName) ix++
  }
  return ''
}


// 事件拦截
export const patchEvent = (originEvent, name) => {
  return function () {
    // 执行原生方法
    const res = originEvent.apply(this, arguments)

    const e = new Event(name)
    window.dispatchEvent(e)

    return res
  }
}


// 获取最近一次事件
export const getLastEvent = () => {
  let lastEvent;

  ["click", "touchstart", "mousedown", "keydown", "mouseover"].forEach(
    (eventType) => {
      document.addEventListener(
        eventType,
        (event) => {
          lastEvent = event;
        },
        {
          capture: true, // 是在捕获阶段还是冒泡阶段执行
          passive: true, // 默认不阻止默认事件
        }
      );
    }
  );
  return lastEvent
}


export const getSelector = (pathsOrTarget) => {
  function getSelectors(path) {
    // 反转 + 过滤 + 映射 + 拼接
    return path
      .reverse()
      .filter((element) => {
        return element !== document && element !== window;
      })
      .map((element) => {
        console.log("element", element.nodeName);
        let selector = "";
        if (element.id) {
          return `${element.nodeName.toLowerCase()}#${element.id}`;
        } else if (element.className && typeof element.className === "string") {
          return `${element.nodeName.toLowerCase()}.${element.className}`;
        } else {
          selector = element.nodeName.toLowerCase();
        }
        return selector;
      })
      .join(" ");
  }
  if (Array.isArray(pathsOrTarget)) {
    return getSelectors(pathsOrTarget);
  } else {
    let path = [];
    while (pathsOrTarget) {
      path.push(pathsOrTarget);
      pathsOrTarget = pathsOrTarget.parentNode;
    }
    return getSelectors(path);
  }
}

export const formatTime = (time) => {
  return new Date(time).getTime()
}