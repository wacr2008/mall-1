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
import {getBack} from "../../../components/utils.js";

export default {
  name: "message",
  data() {
    return {
      message: "",
      img: "",
      title: "",
      price: "",
      id: 0,
      indexTrans: 0
    };
  },
  methods: {
    getBack,

    onClickSubmit() {
      this.changeMessage();
      this.$router.push({
        path: "/cart"
      });
    },
    changeMessage() {
      editMessage({ goodsId: this.id, bbs: this.message }).then(data => {
        console.log(data);
      });
    }
  },
  created() {
    this.message = this.$route.query.message;
    this.img = this.$route.query.img;
    this.price = this.$route.query.price;
    this.title = this.$route.query.title;
    this.indexTrans = this.$route.query.indexTrans;
    this.id = this.$route.query.id;
  }
};
</script>

<style scoped lang="scss">
@import "message";
</style>
