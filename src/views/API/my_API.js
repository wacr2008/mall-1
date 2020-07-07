import { MY_URL_GET_DATA } from "./URLs.js";
import request from "./vender/request.js";
import { token } from "./token.js";

export function getMyData() {
  return request({
    url: MY_URL_GET_DATA,
    data: {
      goods: {
        id: null,
        goodsName: null
      },
      page: 1,
      limit: 5
    },
    headers: {
      token: token
    }
  }).then(data => {
    return data.data.data;
  });
}
