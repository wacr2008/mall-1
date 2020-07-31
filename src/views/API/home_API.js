import { HOME_POSITION, SEARCH_POSITION } from "./URLs.js";
import request from "./vender/request.js";

export function getPosition() {
  return request({ url: HOME_POSITION }).then(data => {
    return data;
  });
} //获取市列表

export function searchPosition(e) {
  return request({
    url: SEARCH_POSITION,
    data: {
      name: e
    }
  }).then(data => {
    return data;
  });
} //获取搜索信息，模糊查询
