import {
  MY_GET_DATA_URL,
  MY_EDIT_DATA_URL,
  ADD_POSITION_URL,
  GET_POSITION_URL,
  UPLOAD_IMG_URL
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
    console.log(data);
    return data.data.data[0];
  });
}

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
}

export function editData(data) {
  const { sex, age } = data;
  return request({
    url: MY_EDIT_DATA_URL,
    data: {
      user: {
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
}

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
}

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
}

export function upLodeImg(data) {
  return request({
    url: UPLOAD_IMG_URL,
    data: {
      file: data
    }
  }).then(data => {
    return data;
  });
}
