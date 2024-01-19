import { lazyReport } from "./report"

// 手动捕获
export const errorCaptcher = (error, msg) => {
  lazyReport('error', {
    message: msg,
    error: JSON.stringify(error, Object.getOwnPropertyNames(error), 2), // 直接传入error类型，序列化会丢失
    errorType: 'catchError'
  })
}

// 全局事件捕获
export const errorTrackerReport = () => {
  // js错误
  const originError = window.onerror
  window.onerror = (msg, url, row, col, error) => {
    // 执行原有onerror事件
    originError && originError.call(window, msg, url, row, col, error)

    lazyReport('error', {
      message: msg,
      file: url,
      row,
      col,
      error: JSON.stringify(error, Object.getOwnPropertyNames(error), 2), // 直接传入error类型，序列化会丢失,
      errorType: 'jsError'
    })
  }

  // ------- resource error --------
  window.addEventListener('error', (error) => {
    let target = error.target;
    let isElementTarget = target instanceof HTMLScriptElement || target instanceof HTMLLinkElement || target instanceof HTMLImageElement;
    if (!isElementTarget) {
      return; // js error不再处理
    }
    lazyReport('error', {
      message: "加载 " + target.tagName + " 资源错误",
      file: target.src,
      errorType: 'resourceError'
    });
  }, true)
  // // 资源加载错误
  // window.addEventListener('error', (e) => {
  //   const target = e.target
  //   // 是否加载资源的标签
  //   const isResourceElement = target instanceof HTMLScriptElement
  //     || target instanceof HTMLLinkElement || target instanceof HTMLImageElement
  //     || target instanceof HTMLVideoElement || target instanceof HTMLAudioElement

  //   // 过滤掉其他错误，避免重复上报
  //   if (!isResourceElement) return

  //   lazyReport('error', {
  //     message: `加载${target.tagName}资源错误`,
  //     file: target.src || target.href || '',
  //     errorType: 'resourceError'
  //   })
  // }, true)

  // promise未被捕获错误
  window.addEventListener('unhandledrejection', (error) => {
    lazyReport('error', {
      message: error.reason,
      error: JSON.stringify(error, Object.getOwnPropertyNames(error), 2), // 直接传入error类型，序列化会丢失,
      errorType: 'promiseError'
    })
  })

  // 白屏
  // TODO


}
