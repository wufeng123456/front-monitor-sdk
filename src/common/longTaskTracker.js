import { lazyReport } from "./report";
import { formatTime, getLastEvent, getSelector } from "./utils";


export function longTaskTrackerReport() {
  new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.duration > 100) {
        let lastEvent = getLastEvent();
        requestIdleCallback(() => {
          lazyReport('performance', {
            type: "longTask",
            eventType: lastEvent ? lastEvent.type : '',
            startTime: formatTime(entry.startTime), // 开始时间
            duration: formatTime(entry.duration), // 持续时间
            selector: lastEvent
              ? getSelector(lastEvent.path || lastEvent.target)
              : "",
          })
        });
      }
    });
  }).observe({ entryTypes: ["longtask"] });
}
