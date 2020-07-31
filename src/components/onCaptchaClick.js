import { sendSMS } from "../views/API/signIn_API.js";
import { Toast } from "vant";

export function onCaptchaClick(phone, settingTime = 10) {
  //send captcha
  this.ifClick = true;
  let showTime = settingTime;
  Toast.success("验证码已发送");
  const countDown = setInterval(() => {
    this.clickMessage = `请在${showTime}s后重试`;
    showTime--;
    if (showTime < 0) {
      clearInterval(countDown); //清除计时器
      this.ifClick = false; //打开点击功能
      this.clickMessage = "获取验证码";
    }
  }, 1000);
  sendSMS(phone).then(data => {
    if (data.msg === "发送成功") {
      console.log(data);
      this.captchaSend = data.sendcode;
      console.log(this.captchaSend);
    }
  });
} //设置验证码倒计时，演示效果只设置10s
