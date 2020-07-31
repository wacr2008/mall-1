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
  </div>
</template>

<script>
import { getBack } from "../../../../components/utils.js";
import { getAllShoppingData } from "../../../API/all_shopping_API.js";
// eslint-disable-next-line no-unused-vars
import { getImgRightPath } from "../../../../components/utils.js";

export default {
  data() {
    return {
      name: "topPart",
      topImg: [
        require("../../../../assets/img/to/shoppingDetail/topImg1.png"),
        require("../../../../assets/img/to/shoppingDetail/topImg2.png"),
        require("../../../../assets/img/to/shoppingDetail/topImg3.png")
      ],
      shopping: {},
      id: 0,
      title: "现代风格实木圆角餐桌",
      price: "￥6250",
      sellNum: "36",
      advantage_text: ["制造商直供1", "制造商直供2", "制造商直供3"]
    };
  },
  methods: {
    getBack
  },
  created() {
    this.id = this.$route.query.id;
    //获取id，通过传id获取相应的数据
    getAllShoppingData(this.id).then(data => {
      this.shopping = data[0];
      this.title = this.shopping.goodsName;
      this.price = this.shopping.price;
      if (this.shopping.imgs) {
        //如果imgs中有数据则调用imgs中的图片做轮播效果
        const imgs = this.shopping.imgs.split(";");
        this.topImg = [];
        imgs.forEach((e, i) => {
          if (i < e.length - 1) {
            this.topImg.push(getImgRightPath(e));
          } //给我的数据格式有问题，最后多了一个分号，如果不比数量少一则会出错
        });
      } else {
        //如果imgs中无数据则直接用img图片来做展示
        this.topImg = [];
        this.topImg.push(getImgRightPath(this.shopping.img));
      }
    });
  }
};
</script>

<style scoped lang="scss">
@import "topPart";
</style>
