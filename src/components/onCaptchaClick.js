export function onCaptchaClick() {
  //send captcha
  this.ifClick = true;
  let showTime = 10;
  const countDown = setInterval(() => {
    this.clickMessage = `请在${showTime}s后重试`;
    showTime--;
    if (showTime < 0) {
      clearInterval(countDown); //清除计时器
      this.ifClick = false; //打开点击功能
      this.clickMessage = "获取验证码";
    }
  }, 1000);
} //设置验证码倒计时，演示效果只设置10s
