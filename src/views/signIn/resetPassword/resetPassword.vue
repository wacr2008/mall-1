<template>
  <div class="resetPassword">
    <div class="resetPassword-topPart">
      <button class="resetPassword-topPart-back" @click="getBack">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-back"></use>
        </svg>
      </button>
      <div class="resetPassword-topPart-title">重置密码</div>
    </div>
    <div class="resetPassword-contain">
      <van-form>
        <van-field
          v-model="password"
          type="password"
          placeholder="请输入新密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="passwordAg"
          type="password"
          placeholder="请再次输入新密码"
          :rules="[
            { required: true, message: '密码不一致', validator: judgeEq }
          ]"
        />
      </van-form>
      <div class="resetPassword-contain-finishButton">
        <van-button type="danger" @click="onClickFinish">下一步</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getBack } from "../../../components/utils.js";
import { Toast } from "vant";

export default {
  name: "resetPassword",
  data() {
    return {
      password: "",
      passwordAg: ""
    };
  },
  methods: {
    getBack,
    judgeEq() {
      return this.passwordAg === this.password;
    },
    onClickFinish() {
      if (!this.password) {
        Toast.fail("请输入密码");
      } else {
        if (!this.judgeEq()) {
          Toast.fail("密码不一致");
        } else {
          Toast.success("修改成功");
          this.$router.push("/signIn");
        }
      }
    }
  }
};
</script>

<style scoped lang="scss">
.resetPassword {
  &-topPart {
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
    }

    &-finishButton {
      width: 50%;
      margin: 1rem auto 0 auto;

      button {
        width: 100%;
      }
    }
  }
}
</style>
