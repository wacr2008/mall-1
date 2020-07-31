import { ALL_SHOPPING_URL, FIND_SKU_URL } from "./URLs.js";
import request from "./vender/requestWithOther.js";

export function getAllShoppingData(goodsId = "", goodsName = "") {
  if (goodsId && goodsName) {
    return request({ url: ALL_SHOPPING_URL(goodsId, goodsName) }).then(data => {
      return data.data.data;
    });
  } else if (goodsId && !goodsName) {
    return request({ url: ALL_SHOPPING_URL(goodsId) }).then(data => {
      return data.data.data;
    });
  }
}

export function getShoppingSku(id) {
  return request({
    url: FIND_SKU_URL,
    data: {
      goodsId: id,
      page: 1,
      limit: 10
    }
  }).then(data => {
    return data.data.data;
  });
}
