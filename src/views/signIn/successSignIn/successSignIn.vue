<template>
  <div class="successSignIn">
    <div class="successSignIn-headerImg">
      <van-circle v-model="rate" color="red" :rate="100" :speed="50">
        <template #default>
          <img :src="userImg" />
        </template>
      </van-circle>
    </div>
    <div class="successSignIn-welcome">
      欢迎登录
    </div>
    <div class="successSignIn-bottomLogo">
      <img
        :src="require('../../../assets/img/signIn/bottomLogo.png')"
        alt="err"
      />
    </div>
  </div>
</template>

<script>
import { getMyData } from "../../API/my_API.js";
import { setCookie } from "../../../components/cookie.js";
import { getImgRightPath } from "../../../components/utils.js";

export default {
  name: "successSignIn",
  data() {
    return {
      userImg: "",
      rate: 0,
      phone: ""
    };
  },
  methods: {
    autoJump() {
      setTimeout(() => {
        this.$router.push("/my");
      }, 2000);
    },
    getMyData,
    getImgRightPath
  },
  created() {
    this.autoJump();
    this.getMyData().then(data => {
      if (data.img) {
        this.userImg = this.getImgRightPath(data.img);
      } else {
        this.userImg = require("../../../assets/img/signIn/defaultHeader.png");
      }
      setCookie("headerImg", this.userImg);
    });
  }
};
</script>

<style scoped lang="scss">
.successSignIn {
  &-headerImg {
    height: 2rem;
    width: 2rem;
    margin: 4rem auto 0 auto;
    overflow: hidden;
    border-radius: 50%;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      overflow: hidden;
    }
  }

  &-welcome {
    margin: 0.5rem 0;
    font-size: initial;
    text-align: center;
  }

  &-bottomLogo {
    width: 30%;
    margin: 5rem auto 0.5rem auto;

    img {
      width: 100%;
      object-fit: contain;
    }
  }
}
</style>
