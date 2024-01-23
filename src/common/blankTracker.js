import { lazyReport } from "./report"

// 白屏监控
export function blankTrackerReport(rootElements = []) {
  let wrapperElements = ["html", "body"].concat(rootElements);
  let emptyPoints = 0;
  function getSelector(element) {
    const { id, className, nodeName } = element;
    if (id) {
      return "#" + id;
    } else if (className) {
      // 过滤空白符 + 拼接
      return (
        "." +
        className
          .split(" ")
          .filter((item) => !!item)
          .join(".")
      );
    } else {
      return nodeName.toLowerCase();
    }
  }
  function isWrapper(element) {
    let selector = getSelector(element);
    if (wrapperElements.indexOf(selector) !== -1) {
      emptyPoints++;
    }
  }
  // 刚开始页面内容为空，等页面渲染完成，再去做判断
  window.addEventListener('load', function () {
    let xElements, yElements;
    // 检查20个坐标
    for (let i = 0; i < 9; i++) {
      console.log('xpoint',         (window.innerWidth * i) / 10,
      window.innerHeight / 2)
      console.log('ypoint',        window.innerWidth / 2,
      (window.innerHeight * i) / 10)
      xElements = document.elementsFromPoint(
        (window.innerWidth * i) / 10,
        window.innerHeight / 2
      );
      yElements = document.elementsFromPoint(
        window.innerWidth / 2,
        (window.innerHeight * i) / 10
      );
      isWrapper(xElements[0]);
      isWrapper(yElements[0]);
    }
    // 白屏点数占比可自行控制
    if (emptyPoints >= 20) {
      const centerElements = document.elementsFromPoint(
        window.innerWidth / 2,
        window.innerHeight / 2
      );
      console.log("emptyPoints++++++++++++++", getSelector(centerElements[0]));
      lazyReport('error', {
        emptyPoints: emptyPoints + "",
        screen: window.screen.width + "X" + window.screen.height,
        viewPoint: window.innerWidth + "X" + window.innerHeight,
        selector: getSelector(centerElements[0]),
        errorType: 'blankScreen'
      })
    }
  })
}
