<template>
  <div class="settingIfm">
    <van-cell-group class="settingIfm-item">
      <van-cell title="关于我们" is-link @click="onClickAboutUs" />
      <van-cell title="意见反馈" is-link @click="onClickFeedBack" />
      <van-cell title="在线客服" is-link />
      <van-cell
        title="清除缓存"
        :value="`${cache} KB`"
        is-link
        @click="onClickRemoveCache"
      />
      <van-cell title="通知推送">
        <van-switch
          v-model="checked"
          size="0.4rem"
          @click="onClickSwitch"
          active-color="#D72928"
        />
      </van-cell>
    </van-cell-group>
    <van-button type="default" @click="onClickLogOut" v-show="show">
      退出当前登录
    </van-button>
  </div>
</template>

<script>
import { Toast } from "vant";
import { removeCookie, getCookie } from "../../../../components/cookie.js";

export default {
  name: "settingIfm",
  data() {
    return {
      checked: false,
      cache: "0",
      show: true
    };
  },
  methods: {
    onClickAboutUs() {
      this.$router.push("/aboutUs");
    },
    onClickRemoveCache() {
      this.cache = 0;
      Toast.success("缓存清除成功");
    },
    onClickSwitch() {
      if (this.checked) {
        Toast("关闭数据推送");
      } else {
        Toast("打开数据推送");
      }
    },
    onClickFeedBack() {
      this.$router.push("../feedBack");
    },
    onClickLogOut() {
      removeCookie("token");
      removeCookie("headerImg");
      this.$router.push("/my");
    }, //清除token和headerImg的cookie来达到退出登录的目的
    judgeShow() {
      this.show = getCookie("token") !== "未找到对应cookie";
    }
  },
  created() {
    this.judgeShow();
  }
};
</script>

<style scoped lang="scss">
.van-button {
  width: 100%;
  margin-top: 0.6rem;
  color: #db4546;
}

.settingIfm-item {
  margin-top: 0.25rem;
}
</style>
