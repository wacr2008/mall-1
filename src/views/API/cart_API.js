import { CART_URL_GET_DATA, CART_URL_MODIFY } from "./URLs.js";
import request from "./vender/requestWithOther.js";
import { token } from "./token.js";

export function getCartData() {
  return request({
    url: CART_URL_GET_DATA,
    data: {
      page: 1,
      limit: 5
    },
    headers: {
      token: token
    }
  }).then(data => {
    return data.data.data;
  });
} //获取数据请求

export function editMessage(editDataNeed) {
  const { goodsId, bbs } = editDataNeed;
  return request({
    url: CART_URL_MODIFY,
    data: {
      chooseGoods: {
        goodsId: goodsId,
        bbs: bbs
      }
    },
    headers: {
      token: token
    }
  }).then(data => {
    return data;
  });
} //修改留言请求
