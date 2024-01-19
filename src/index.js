import { actionTrackerReport } from "./common/actionTracker";
import { getCache } from "./common/cache";
import { errorCaptcher } from "./common/errorTracker";
import { lazyReport, report } from "./common/report";
import { loadConfig } from "./common/utils";

function init (options) {
  if (!options) return
  // 加载配置项目
  // 注入监控代码
  loadConfig(options)

  // uv统计
  lazyReport('user', '加载应用')

  // 页面被卸载，存在埋点数据未上传
  // 存在问题：
  // 用户加载了网页并与其交互。
  // 完成浏览后，用户切换到了其他应用程序，而不是关闭选项卡。
  // 随后，用户通过手机的应用管理器关闭了浏览器应用。
  window.addEventListener('unload', () => {
    let data = getCache()
    data && data.length && report(data)
  })

  // 在会话结束时发送统计数据
  // document.addEventListener("visibilitychange", () => {
  //   let data = getCache()
  //   if (document.visibilityState === "hidden" && data && data.length) {
  //     report(data)
  //   }
  // });
}


export {
  init,
  errorCaptcher,
  actionTrackerReport
}