<template>
  <div class="topPart">
    <div class="topPart-topLine">
      <div class="topPart-topLine-edit" @click="onClickEdit">
        <img
          :src="require('../../../assets/img/my/topPart/edit.png')"
          alt="err"
        />
      </div>
      <div class="topPart-topLine-ring">
        <img
          :src="require('../../../assets/img/my/topPart/ring.png')"
          alt="err"
        />
      </div>
    </div>
    <div class="topPart-userHeader">
      <img :src="user.headerImg" @click="onClickMyMessage" />
    </div>
    <div class="topPart-userName">
      {{ user.name }}
    </div>
    <div class="topPart-bottomLine">
      <div
        class="topPart-bottomLine-item"
        v-for="(item, index) in bottomLine"
        :key="index"
        @click="onClick(item.text)"
      >
        <span class="topPart-bottomLine-item-img">
          <img :src="item.img" alt="err" />
        </span>
        <span class="topPart-bottomLine-item-text">
          {{ item.text }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { getMyData, ifSignIn } from "../../API/my_API.js";
import { getImgRightPath } from "../../../components/utils.js";
import { getCookie } from "../../../components/cookie.js";

export default {
  name: "myTopPart",
  data() {
    return {
      phone: "",
      user: {
        headerImg: "",
        name: "未登录"
      },
      dataGet: {},
      bottomLine: [
        {
          img: require("../../../assets/img/my/topPart/signIn.png"),
          text: "签到"
        },
        {
          img: require("../../../assets/img/my/topPart/collect.png"),
          text: "收藏"
        },
        {
          img: require("../../../assets/img/my/topPart/share.png"),
          text: "分享"
        },
        {
          img: require("../../../assets/img/my/topPart/foot.png"),
          text: "足迹"
        }
      ]
    };
  },
  methods: {
    onClick(str) {
      if (this.user.name === "未登录") {
        Toast.fail("请先点击头像登录");
      } else {
        switch (str) {
          case "签到": {
            this.bottomLine[0].text = "已签到";
            const arr = [
              ...document.querySelectorAll(".topPart-bottomLine-item")
            ];
            arr[0].style.color = "#D1D1D1";
            ifSignIn();
            Toast.success("已签到");
            break;
          }
          case "收藏":
            Toast.success("收藏");
            break;
          case "分享": {
            Toast.success("分享");
            break;
          }
          case "足迹": {
            Toast.success("足迹");
            break;
          }
          case "已签到": {
            Toast("今日已签到，请明天再来");
            break;
          }
        }
      }
    },

    onClickEdit() {
      this.$router.push("/setting");
    }, //跳转设置页面

    onClickMyMessage() {
      if (this.user.name === "未登录") {
        this.$router.push("/signIn");
      } else {
        this.$router.push({
          path: "/myMessage",
          query: {
            headerImg: this.user.headerImg,
            name: this.user.name
          }
        });
      }
    }, //跳转我的信息界面

    getMyData() {
      getMyData().then(data => {
        this.dataGet = data;
        if (!data.userName) {
          this.user.name = data.phone;
        } else {
          this.user.name = data.userName;
        } //若新用户无用户名则将手机号作为用户名
        if (this.getCookie("token")) {
          if (data.state === 1) {
            this.bottomLine[0].text = "已签到";
            const arr = [
              ...document.querySelectorAll(".topPart-bottomLine-item")
            ];
            arr[0].style.color = "#D1D1D1";
          }
          //判断是否签到，state=1则已签到,若已签到则渲染已签到的样式
        }
      });
    }, //获取数据

    getImgRightPath,
    getCookie
  },
  created() {
    if (this.getCookie("headerImg") !== "未找到对应cookie") {
      this.user.headerImg = this.getCookie("headerImg");
    }
    if (this.getCookie("token") !== "未找到对应cookie") {
      this.getMyData();
    }
    if (this.user.headerImg === "") {
      this.user.headerImg = require("../../../assets/img/my/topPart/myHeader.png");
    }
  }
};
</script>

<style scoped lang="scss">
@import "topPart";
</style>
