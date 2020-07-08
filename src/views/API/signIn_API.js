import request from "./vender/request.js";
import { SING_IN_URL, REGISTER_URL } from "./URLs.js";

export function signInJudge(phone, password) {
  return request({
    url: SING_IN_URL,
    data: {
      user: {
        phone: phone,
        password: password
      }
    }
  }).then(data => {
    return data.data;
  });
}

export function registerAccount(data) {
  const { phoneData, passwordData, referralCodeData, codeData } = data;
  return request({
    url: REGISTER_URL,
    data: {
      user: {
        phone: phoneData,
        password: passwordData,
        referralCode: referralCodeData
      },
      code: codeData
    }
  }).then(data => {
    console.log(data);
    return data;
  });
}
