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
  return `http://192.168.0.26:8080/image/chenzw_fxsc/${pathW}`;
}

/**
 * 回退到上个页面
 */
export function getBack() {
  this.$router.go(-1);
}
