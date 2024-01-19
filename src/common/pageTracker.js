import { lazyReport } from "./report"
import { patchEvent } from "./utils"

export const historyPageTrackerReport = () => {
  let beforeTime = Date.now() // 进入页面的时间
  let beforePage = '' // 上一个页面
  // 获取页面停留时间
  function getStayTime () {
    let curTime = Date.now()
    let stayTime = curTime - beforeTime
    beforeTime = curTime
    return stayTime
  }
  window.history.pushState = patchEvent(window.history.pushState, 'monitor_push_state')
  window.history.replaceState = patchEvent(window.history.replaceState, 'monitor_replace_state')

  // 监听history.pushState
  window.addEventListener('monitor_push_state', () => {
    listener()
  })
  // 监听history.replaceState
  window.addEventListener('monitor_replace_state', () => {
    listener()
  })
  // 监听history.forward()、history.back()、history.go()
  window.addEventListener('popstate', () => {
    listener()
  })
  // 监听页面刷新
  window.addEventListener('load', function () {
    listener()
  });
  // 监听页面关闭
  window.addEventListener('unload', function () {
    listener()
  });
  function listener () {
    let stayTime = getStayTime()
    let curPage = window.location.href
    lazyReport('visit', {
      stayTime,
      page: beforePage
    })
    beforePage = curPage
  }
}

export const hashPageTrackerReport = () => {
  let beforeTime = Date.now() // 进入页面的时间
  let beforePage = '' // 上一个页面
  // 获取页面停留时间
  function getStayTime () {
    let curTime = Date.now()
    let stayTime = curTime - beforeTime
    beforeTime = curTime
    return stayTime
  }
  // vue-router hash路由的实现使用兼容的方式，支持pushState优先使用history.pushState，不支持使用hashChange
  window.history.pushState = patchEvent(window.history.pushState, 'monitor_push_state')

  // hash监听
  window.addEventListener('hashchange', () => {
    listener()
  })
  // 监听history.pushState
  window.addEventListener('monitor_push_state', () => {
    listener()
  })
  // 监听history.forward()、history.back()、history.go()
  // window.addEventListener('popState', () => {
  //   listener()
  // })
  // 监听页面刷新
  window.addEventListener('load', function () {
    listener()
  });
  // 监听页面关闭
  window.addEventListener('unload', function () {
    listener()
  });

  function listener () {
    let stayTime = getStayTime()
    let curPage = window.location.href
    lazyReport('visit', {
      stayTime,
      page: beforePage
    })
    beforePage = curPage
  }
}
