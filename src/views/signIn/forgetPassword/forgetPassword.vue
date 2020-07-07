<template>
  <div class="forgetPassword">
    <div class="forgetPassword-topPart">
      <button class="forgetPassword-topPart-back" @click="getBack">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-back"></use>
        </svg>
      </button>
      <div class="forgetPassword-topPart-title">忘记密码</div>
    </div>
    <div class="forgetPassword-contain">
      <van-form>
        <van-field
          v-model="tel"
          type="tel"
          placeholder="请输入手机号"
          :rules="[{ required: true, message: '请填写正确手机号' }]"
        />
        <van-field
          v-model="captcha"
          type="digit"
          name="验证码"
          placeholder="请输入验证码"
          :rules="[{ required: true }]"
        >
          <template #button>
            <van-button
              size="small"
              type="default"
              :disabled="ifClick"
              @click="onCaptchaClick"
            >
              {{ clickMessage }}
            </van-button>
          </template>
        </van-field>
      </van-form>
      <div class="forgetPassword-contain-nextButton">
        <van-button type="danger" @click="onClickNext">下一步</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getBack } from "../../../components/utils.js";
import { onCaptchaClick } from "../../../components/onCaptchaClick.js";

export default {
  name: "forgetPassword",
  data() {
    return {
      tel: "",
      captcha: "",
      ifClick: false,
      clickMessage: "获取验证码"
    };
  },
  methods: {
    getBack,
    onCaptchaClick,
    onClickNext() {
      console.log("next");
      this.$router.push("/resetPassword");
    }
  }
};
</script>

<style scoped lang="scss">
.forgetPassword {
  .forgetPassword-topPart {
    width: 100%;
    height: 1rem;
    background-color: #fff;
    display: flex;
    font-size: initial;
    align-items: center;
    position: relative;
    border-bottom: 1px solid #ededed;

    &-back {
      position: absolute;
      height: 0.5rem;
      width: 0.5rem;
      margin-left: 0.2rem;
    }

    &-title {
      margin: auto;
    }
  }

  &-contain {
    width: 90%;
    margin: 0.8rem auto 0 auto;

    .van-cell {
      margin: 0.2rem 0;
      border: 1px solid #e6e6e6;

      .van-field__button {
        .van-button {
          color: #da4142;
          align-items: center;
        }
      }
    }

    &-nextButton {
      width: 50%;
      margin: 1rem auto 0 auto;

      button {
        width: 100%;
      }
    }
  }
}
</style>
