import {
  CART_URL_GET_DATA,
  CART_URL_MODIFY,
  CART_URL_ADD,
  CART_REMOVE_URL
} from "./URLs.js";
import request from "./vender/requestWithOther.js";

export function getCartData(token) {
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
    return data;
  });
} //获取数据请求

export function editMessage(editDataNeed, token) {
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

export function addShoppingToCart(data, token) {
  const { id, attr, attrVal, price, num } = data;
  return request({
    url: CART_URL_ADD,
    data: {
      chooseGoods: {
        goodsId: id,
        goodsAttr: attr,
        goodsAttrVal: attrVal,
        price: price,
        num: num
      }
    },
    headers: {
      token: token
    }
  }).then(data => {
    return data;
  });
}

export function removeShoppingFromCart(id, token) {
  return request({
    url: CART_REMOVE_URL,
    data: {
      ids: id
    },
    headers: {
      token: token
    }
  });
}

export function modifyShoppingMessage(id, num, token) {
  return request({
    url: CART_URL_MODIFY,
    data: {
      chooseGoods: {
        goodsId: id,
        num: num
      }
    },
    headers: {
      token: token
    }
  });
}
