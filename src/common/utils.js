import { autoActionTrackerReport } from "./actionTracker"
import { errorTrackerReport } from "./errorTracker"
import { hashPageTrackerReport, historyPageTrackerReport } from "./pageTracker"

export const loadConfig = (options) => {
  const {
    appId, // 项目id
    userId, // 用户id
    reportUrl, // 监控上报接口地址
    autoActionTracker, // 开启行为日志自动埋点
    delay, // 延迟并合并上报
    hashPage, // 是否hash路由
    errorReport // 是否开启错误监控
  } = options

  if (appId) window.__monitor_app_id__ = appId

  if (userId) window.__monitor_user_id__ = userId

  if (reportUrl) window.__monitor_report_url__ = reportUrl

  if (delay) window.__monitor_delay__ = delay

  // 开启错误监控
  if (errorReport) errorTrackerReport()

  // 行为日志开启自动埋点
  if (autoActionTracker) autoActionTrackerReport()

  // 路由监听
  hashPage ? hashPageTrackerReport() : historyPageTrackerReport()
}


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