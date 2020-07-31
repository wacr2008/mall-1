import {
  MY_GET_DATA_URL,
  MY_EDIT_DATA_URL,
  ADD_POSITION_URL,
  GET_POSITION_URL,
  UPLOAD_IMG_URL,
  DELETE_POSITION_URL,
  CHANGE_POSITION_URL
} from "./URLs.js";
import request from "./vender/request.js";
import { getCookie } from "../../components/cookie.js";

export function getMyData() {
  return request({
    url: MY_GET_DATA_URL,
    data: {
      user: {
        userName: null,
        phone: null,
        id: null
      },
      page: 1,
      limit: 10
    },
    headers: {
      token: getCookie("token")
    }
  }).then(data => {
    return data.data.data[0];
  });
} //获取我的页面信息

export function ifSignIn() {
  return request({
    url: MY_EDIT_DATA_URL,
    data: {
      user: {
        state: 1
      }
    },
    headers: {
      token: getCookie("token")
    }
  });
} //上传是否签到的状态

export function editData(data) {
  const { sex, age, name } = data;
  return request({
    url: MY_EDIT_DATA_URL,
    data: {
      user: {
        userName: name,
        sex: sex,
        age: age
      }
    },
    headers: {
      token: getCookie("token")
    }
  }).then(data => {
    return data;
  });
} //修改数据信息

export function addPosition(data, token) {
  const { name, phone, province, city, area, positionDetail } = data;
  return request({
    url: ADD_POSITION_URL,
    data: {
      userAddress: {
        userName: name,
        phone: phone,
        proId: province,
        cityId: city,
        areaId: area,
        detailed: positionDetail
      }
    },
    headers: {
      token: token
    }
  }).then(data => {
    return data;
  });
} // 添加收货地址

export function getMyPosition(token) {
  return request({
    url: GET_POSITION_URL,
    data: {
      page: 1,
      limit: 10
    },
    headers: {
      token: token
    }
  }).then(data => {
    return data.data;
  });
} //从数据库中获得我已保存的地址

export function deletePosition(data, token) {
  return request({
    url: DELETE_POSITION_URL,
    data: {
      ids: data
    },
    headers: {
      token: token
    }
  }).then(data => {
    return data;
  });
} //删除地址

export function changePosition(data, token) {
  const { name, phone, province, city, area, positionDetail } = data;
  return request({
    url: CHANGE_POSITION_URL,
    data: {
      userAddress: {
        userName: name,
        phone: phone,
        proId: province,
        cityId: city,
        areaId: area,
        detailed: positionDetail
      }
    },
    headers: {
      token: token
    }
  }).then(data => data);
}

export function upLodeImg(data) {
  return request({
    url: UPLOAD_IMG_URL,
    data: {
      file: data.content
    }
  }).then(data => {
    return data;
  });
} //上传图片
