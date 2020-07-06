<template>
  <div class="top-part">
    <div class="top-part-topLine">
      <button class="top-part-topLine-back" @click="getBack">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-back"></use>
        </svg>
      </button>
      <button class="top-part-topLine-share">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
      </button>
    </div>
    <div class="top-part-topImg">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="red">
        <van-swipe-item v-for="topImg in topImg" :key="topImg">
          <img :src="topImg" alt="err" v-lazy="topImg" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="top-part-otherText">
      <div class="top-part-otherText-title">
        {{ title }}
      </div>
      <div class="top-part-otherText-priceLine">
        <div class="top-part-otherText-priceLine-price">
          {{ price }}
        </div>
        <div class="top-part-otherText-priceLine-sellNum">
          已售{{ sellNum }}
        </div>
      </div>
      <div class="top-part-otherText-advantage">
        <div
          class="top-part-otherText-advantage-item"
          v-for="text in advantage_text"
          :key="text"
        >
          <div class="top-part-otherText-advantage-item-icon">
            <img
              src="../../../../assets/img/to/shoppingDetail/right.png"
              alt="err"
            />
          </div>
          <div class="top-part-otherText-advantage-item-text">
            {{ text }}
          </div>
        </div>
        <button class="top-part-otherText-advantage-moreIcon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-qianjin"></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="div-space"></div>
  </div>
</template>

<script>
import { getBack } from "../../../../components/utils.js";

export default {
  data() {
    return {
      name: "topPart",
      topImg: [
        require("../../../../assets/img/to/shoppingDetail/topImg1.png"),
        require("../../../../assets/img/to/shoppingDetail/topImg2.png"),
        require("../../../../assets/img/to/shoppingDetail/topImg3.png")
      ],
      title: "现代风格实木圆角餐桌",
      price: "￥6250",
      sellNum: "36",
      advantage_text: ["制造商直供1", "制造商直供2", "制造商直供3"]
    };
  },
  methods: {
    getBack
  }
};
</script>

<style scoped lang="scss">
@import "topPart";
</style>
