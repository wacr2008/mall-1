<template>
  <div class="message">
    <header>
      <button class="message-header-back" @click="getBack">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-back"></use>
        </svg>
      </button>
      <div class="message-header-title">留言</div>
      <div class="message-header-submit" @click="onClickSubmit">
        提交
      </div>
    </header>
    <div class="message-contain">
      <div class="message-contain-topItem">
        <div class="message-contain-topItem-img">
          <img :src="img" alt="err" />
        </div>
        <div class="message-contain-topItem-prAti">
          <div class="message-contain-topItem-prAti-title">
            {{ title }}
          </div>
          <div class="message-contain-topItem-prAti-price">￥ {{ price }}</div>
        </div>
      </div>
      <div class="message-contain-input">
        <textarea placeholder="请输入内容" v-model="message" />
      </div>
    </div>
  </div>
</template>

<script>
import { editMessage } from "../../API/cart_API.js";
import { getBack } from "../../../components/utils.js";
import { Toast } from "vant";
import { getCookie } from "../../../components/cookie.js";

export default {
  name: "message",
  data() {
    return {
      message: "",
      img: "",
      title: "",
      price: "",
      id: 0,
      indexTrans: 0,
      token: ""
    };
  },
  methods: {
    getBack,

    onClickSubmit() {
      if (!this.message) {
        Toast.fail("输入内容不能为空");
      } else {
        Toast.success("修改成功");
        this.changeMessage();
      }
    },
    changeMessage() {
      editMessage({ goodsId: this.id, bbs: this.message }, this.token).then(
        () => {
          this.$router.push("/cart");
        }
      );
    }
  },
  created() {
    this.message = this.$route.query.message;
    this.img = this.$route.query.img;
    this.price = this.$route.query.price;
    this.title = this.$route.query.title;
    this.indexTrans = this.$route.query.indexTrans;
    this.id = this.$route.query.id;
    this.token = getCookie("token");
  }
};
</script>

<style scoped lang="scss">
@import "message";
</style>
