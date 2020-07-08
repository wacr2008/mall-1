import { MY_URL_GET_DATA, MY_URL_EDIT_DATA } from "./URLs.js";
import request from "./vender/request.js";
import { getCookie } from "../../components/cookie.js";

export function getMyData() {
  return request({
    url: MY_URL_GET_DATA,
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
}

export function editData(signIn = false) {
  if (signIn) {
    return request({
      url: MY_URL_EDIT_DATA,
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
}
