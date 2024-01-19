import { lazyReport } from "./report"
import { getPath } from "./utils"


// 手动上报
export const actionTrackerReport = (actionType, data) => {
  lazyReport('action', {
    actionType,
    data
  })
}


// 自动上报
export const autoActionTrackerReport = () => {
  window.addEventListener('click', (e) => {
    const clickedDom = e.target
    // 获取自动上报标识内容
    const target = clickedDom?.getAttribute('data-target')

    const no = clickedDom?.getAttribute('data-no')
    // 主动上报设置，避免重复
    if (no) return 

    if (target) {
      lazyReport('action', {
        actionType: 'click',
        data: target
      })
    } else {
      const path = getPath(clickedDom)
      lazyReport('action', {
        actionType: 'click',
        data: path
      })
    }
  })
}
