import { getCache, addCache, clearCache } from "./cache"

let timer = null

export const lazyReport = (type, params) => {
  console.log(type, params, '----------------', JSON.stringify(params))
  const appId = window.__monitor_app_id__
  const userId = window.__monitor_user_id__
  const delay = window.__monitor_delay__

  const logParams = {
    appId, //项目id
    userId, // 用户id
    type, // error|action|visit|user
    data: params,
    currentTime: new Date().getTime(), // 时间戳
    currentPage: window.location.href, // 当前页面
    ua: navigator.userAgent // ua信息
  }
  addCache(logParams)

  let data = getCache()

  // 没有延迟
  if (!delay) {
    report(data)
    clearTimeout(timer)
    return
  }

  // 合并日志，大于10条，不再等待delay
  if (data && data.length > 10) {
    report(data)
    clearTimeout(timer)
    return
  }

  clearTimeout(timer);
  timer = setTimeout(() => {
    report(data)
  }, delay)

}

export function report (data) {
  console.log(data, 'report_data')
  const url = window.__monitor_report_url__
  // 常规接口上传
  // 异步 XMLHttpRequest 在卸载页面时，会被忽略
  // 跨域问题
  // fetch(url, {
  //   method: 'POST',
  //   body: data,
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // }).then(res => {
  //   console.log(res)
  // }).catch(err => {
  //   console.error(err)
  // })
  // 浏览器支持sendBeacon
  // 数据发送是可靠的。
  // 数据异步传输。
  // 不影响下一导航的载入
  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, JSON.stringify(data))
  } else {
    // JSONP方式
    // 迫使用户代理延迟卸载文档，并使得下一个导航出现的更晚
    let img = new Image()
    img.src = `${url}?logs=${JSON.stringify(data)}`
  }

  clearCache()
}