/** 查询所有商品的URL **/
export function ALL_SHOPPING_URL(id = "", goodsName = "") {
  if (id && goodsName) {
    return `./api/testdemo/goods/selgoods.action?page=1&limit=10&id=${id}&goodsName=${goodsName}`;
  } else if (id && !goodsName) {
    return `./api/testdemo/goods/selgoods.action?page=1&limit=10&id=${id}`;
  } else {
    return `./api/testdemo/goods/selgoods.action?page=1&limit=10`;
  }
}

/** 首页URL **/
export const HOME_POSITION = "./api/testdemo/pca/citylist.action";
//查询市目录

/** 分类URL **/
export function SORT_URL_SECOND(pid) {
  return `./api/testdemo/goods/selsecondlist.action?page=1&limit=10&pid=${pid}`;
} //分类页面二级目录

export const SORT_URL_FIRST =
  "./api/testdemo/goods/selfirstlist.action?page=1&limit=10"; //分类页面一级目录

export function SORT_URL_THIRD(id) {
  return `./api/testdemo/goods/sellistgoods.action?page=1&limit=10&secondList=${id}`;
} //分类页面三级目录

/** 购物车URL **/
export const CART_URL_GET_DATA = "./api/testdemo/choose/selchoosegoods.action"; //获取购物车信息

export const CART_URL_MODIFY = "./api/testdemo/choose/editchoosegoods.action"; //修改购物车内容

export const CART_URL_ADD = "./api/testdemo/choose/addshoppinggoods.action"; //添加购物车

/** 我的页面URL **/
export const MY_GET_DATA_URL = "./api/testdemo/user/seluser.action"; //获取用户信息

export const MY_EDIT_DATA_URL = "./api/testdemo/user/edituser.action"; //修改用户信息

export const ADD_POSITION_URL = "./api/testdemo/user/adduseraddress.action"; //添加收货地址

export const GET_POSITION_URL = "./api/testdemo/user/seluseraddress.action"; //查询收货地址

/** 登录页面URL **/
export const SING_IN_URL = "./api/testdemo/user/login.action"; //登录

export const REGISTER_URL = "./api/testdemo/user/register.action"; //注册

export const SENDSMS_URL = "./api/testdemo/sms/sendSMS.action"; //发送验证码

