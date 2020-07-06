import { SORT_URL_FIRST, SORT_URL_SECOND, SORT_URL_THIRD } from "./URLs.js";
import request from "./vender/request.js";

export function getSortData() {
  return request({ url: SORT_URL_FIRST }).then(data => {
    return data.data.data;
  });
}

export function getSortDataSecond(pid) {
  return request({ url: SORT_URL_SECOND(pid) }).then(data => {
    return data.data.data;
  });
}

export function getSortDataThird(id) {
  return request({ url: SORT_URL_THIRD(id) }).then(data => {
    return data;
  });
}
