import request from "./vender/request.js";
import { SING_IN_URL, REGISTER_URL, SENDSMS_URL, RESET_URL } from "./URLs.js";

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
  const { phoneData, passwordData, codeData, referralCodeData } = data;
  console.log(phoneData, passwordData, referralCodeData, codeData);
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
    return data.data;
  });
}

export function sendSMS(data) {
  return request({
    url: SENDSMS_URL,
    data: {
      phone: data
    }
  }).then(data => {
    return data.data;
  });
}

export function resetPassword(phone, data) {
  return request({
    url: RESET_URL,
    data: {
      user: {
        phone: phone,
        password: data
      },
      code: "123123"
    }
  });
}
