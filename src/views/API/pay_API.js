import { PAY_BY_ZFB_URL } from "./URLs.js";
import request from "./vender/request.js";

export function payByZFB(token) {
  return request({
    url: PAY_BY_ZFB_URL,
    data: {
      order: {
        goodsIds: "25,26,",
        price: 108.6,
        body: "质量好",
        addressId: 22
      }
    },
    headers: {
      token: token
    }
  }).then(data => {
    return data.data.data;
  });
}
