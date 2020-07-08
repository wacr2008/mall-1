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
    <div class="div-space"></div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { getMyData, editData } from "../../API/my_API.js";
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
            const arr = [...document.querySelectorAll(".topPart-bottomLine-item")];
            arr[0].style.color = "#D1D1D1";
            editData(true);
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
    },
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
    },
    getMyData() {
      getMyData().then(data => {
        this.dataGet = data;
        console.log(this.dataGet);
        if (data.img) {
          this.user.headerImg = this.getImgRightPath(data.img);
          this.user.name = data.userName;
          if (data.state === 1) {
            this.bottomLine[0].text = "已签到";
            const arr = [...document.querySelectorAll(".topPart-bottomLine-item")];
            arr[0].style.color = "#D1D1D1";
          }
        }
      });
    },
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
