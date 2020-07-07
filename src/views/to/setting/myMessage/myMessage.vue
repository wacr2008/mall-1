<template>
  <div class="myMessage">
    <div class="myMessage-topPart">
      <button class="myMessage-topPart-back" @click="getBack">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-back"></use>
        </svg>
      </button>
      <div class="myMessage-topPart-title">个人信息</div>
    </div>
    <div class="myMessage-headerImg">
      <img :src="headerImg" alt="err" />
    </div>
    <div class="myMessage-otherIFM">
      <van-cell-group>
        <van-cell title="昵称" :value="name" />
        <van-cell title="性别" is-link v-if="!sex" />
        <van-cell title="性别" v-if="sex" :value="sex" />
        <van-cell title="年龄" is-link />
      </van-cell-group>
      <div class="div-space"></div>
      <van-cell-group>
        <van-cell title="地址" is-link />
        <van-cell title="实名认证" is-link />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { getBack } from "../../../../components/utils.js";

export default {
  name: "myMessage",
  data() {
    return {
      headerImg: require("../../../../assets/img/my/topPart/myHeader.png"),
      name: "Saber",
      sex: "男"
    };
  },
  methods: {
    getBack
  },
  created() {
    if (this.$route.query.headerImg) {
      this.headerImg = this.$route.query.headerImg;
      this.name = this.$route.query.name;
    }
  }
};
</script>

<style scoped lang="scss">
.myMessage {
  background-color: #f1f1f1;
  height: 100%;

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

  &-headerImg {
    height: 2rem;
    width: 2rem;
    margin: 0.8rem auto;
    border-radius: 50%;
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
}
</style>
