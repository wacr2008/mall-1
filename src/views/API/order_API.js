import request from "./vender/request.js";
import { GET_ORDER_URL, GET_ORDER_STATE } from "./URLs.js";

export function getOrderData(token) {
  return request({
    url: GET_ORDER_URL,
    data: {
      order: {
        tradeNo: null,
        subject: null,
        state: null
      },
      page: 1,
      limit: 5
    },
    headers: {
      token: token
    }
  }).then(data => {
    return data;
  });
}

export function getOrderState() {
  return request({
    url: GET_ORDER_STATE
  }).then(data => {
    return data.data.data;
  });
}
