import tracker from "../utils/tracker";
import onload from "../utils/onload";
import getLastEvent from "../utils/getLastEvent";
import getSelector from "../utils/getSelector";
export function timing() {
  let FMP, LCP;
  // Thêm người quan sát cho mục nhập hiệu suất
  if (PerformanceObserver) {
    new PerformanceObserver((entryList, observer) => {
      let perfEntries = entryList.getEntries();
      FMP = perfEntries[0]; //startTime sau 2000
      observer.disconnect(); //không còn quan sát
    }).observe({ entryTypes: ["element"] }); //Các yếu tố để quan sát ý nghĩa của trang

    new PerformanceObserver((entryList, observer) => {
      let perfEntries = entryList.getEntries();
      LCP = perfEntries[0];
      observer.disconnect(); //không còn quan sát
    }).observe({ entryTypes: ["largest-contentful-paint"] }); //Các yếu tố để quan sát ý nghĩa của trang

    new PerformanceObserver((entryList, observer) => {
      let lastEvent = getLastEvent();
      let firstInput = entryList.getEntries()[0];
      console.log("FID", firstInput);
      if (firstInput) {
        //thời gian để bắt đầu xử lý Sự khác biệt trong thời gian để mở nhấp chuột là độ trễ xử lý

        let inputDelay = firstInput.processingStart - firstInput.startTime;
        let duration = firstInput.duration; //Thời gian xử lý

        if (inputDelay > 0 || duration > 0) {
          tracker.send({
            kind: "experience", //Chỉ số trải nghiệm người dùng
            type: "firstInputDelay", //đầu vào đầu tiên chậm trễ

            inputDelay, //thời gian trì hoãn

            duration, //Thời gian xử lý

            startTime: firstInput.startTime,
            selector: lastEvent
              ? getSelector(lastEvent.path || lastEvent.target)
              : "",
          });
        }
      }
      observer.disconnect(); //không còn quan sát
    }).observe({ type: "first-input", buffered: true }); //Các yếu tố để quan sát ý nghĩa của trang
  }

  //Lần tương tác đầu tiên của người dùng Nhấp vào trang

  onload(function () {
    setTimeout(() => {
      const {
        fetchStart,
        connectStart,
        connectEnd,
        requestStart,
        responseStart,
        responseEnd,
        domLoading,
        domInteractive,
        domContentLoadedEventStart,
        domContentLoadedEventEnd,
        loadEventStart,
      } = performance.timing;
      tracker.send({
        kind: "experience",
        type: "timing",
        connectTime: connectEnd - connectStart,
        ttfbTime: responseStart - requestStart,
        responseTime: responseEnd - responseStart,
        parseDOMTime: loadEventStart - domLoading,
        domContentLoadedTime:
          domContentLoadedEventEnd - domContentLoadedEventStart,
        timeToInteractive: domInteractive - fetchStart,
        loadTIme: loadEventStart - fetchStart,
      });

      let FP = performance.getEntriesByName("first-paint")[0];
      let FCP = performance.getEntriesByName("first-contentful-paint")[0];

      console.log("FP", FP);
      console.log("FCP", FCP);
      console.log("FMP", FMP);
      console.log("LCP", LCP);
      tracker.send({
        kind: "experience",
        type: "paint",
        firstPaint: FP.startTime,
        firstContentfulPaint: FCP.startTime,
        firstMeaningfulPaint: FMP.startTime,
        largestContentfulPaint: LCP.startTime,
      });
    }, 3000);
  });
}
