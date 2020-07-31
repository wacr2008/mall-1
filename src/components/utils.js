/**
 * 防抖函数
 * @param { Function } fn
 * @param { Number } delay
 * */
export const debounce = (fn, delay = 300) => {
  return function debounce(...args) {
    fn.tId && clearTimeout(fn.tId);
    fn.tId = setTimeout(() => {
      fn.call(this, ...args);
    }, delay);
  };
};

/**
 * 图片地址映射
 * @param pathW
 * @returns {string}
 */
export function getImgRightPath(pathW) {
  return `http://localhost:8077/testdemo/img${pathW}`;
}

/**
 * 回退到上个页面
 */
export function getBack() {
  history.go(-1);
}

/**
 * 数组去重
 * @param {Array} arrNeed
 * @returns {[]}
 */
export function deduplication(arrNeed) {
  let arr = [];
  arrNeed.forEach(e => {
    if (arr.indexOf(e) === -1) arr.push(e);
  });
  return arr;
}

/**
 * 将字符串转为DOM元素
 * @param str
 * @returns {HTMLCollection}
 */
export const parseToNode = str => {
  let div = document.createElement("div");
  div.innerHTML = str;
  const children = div.children;
  div = null; //让div回收
  return children;
};
