<template>
  <div class="orderList">
    <div class="orderList-empty" v-if="num === 0">
      <div class="orderList-empty-img">
        <img :src="emptyImg" alt="err" />
      </div>
      <div class="orderList-empty-text">
        还没有订单哦
      </div>
    </div>
    <div class="orderList-item" v-if="num !== 0">
      <div class="orderList-title" v-if="page === 0 || page === 1">
        <orderItem :shopping="shopping" topState="1" bottomState="1" />
      </div>
      <div class="orderList-title" v-if="page === 0 || page === 2">
        <orderItem :shopping="shopping" topState="2" bottomState="2" />
      </div>
      <div class="orderList-title" v-if="page === 0 || page === 3">
        <orderItem :shopping="shopping" topState="3" bottomState="3" />
      </div>
      <div class="orderList-title" v-if="page === 0 || page === 4">
        <orderItem :shopping="shopping" topState="4" bottomState="4" />
      </div>
    </div>
  </div>
</template>

<script>
import orderItem from "../../../../components/orderItem.vue";
import { getOrderData } from "../../../API/order_API.js";
import { getCookie } from "../../../../components/cookie.js";

export default {
  components: { orderItem },
  name: "orderList",
  data() {
    return {
      page: 0, //第N页
      num: 1, //当页的数据量
      emptyImg: require("../../../../assets/img/to/order/emptyOrder.png"),
      shopping: {
        img: require("../../../../assets/img/to/shoppingDetail/topImg1.png"),
        goodsName: "伊布",
        goodsAttr: "属性：",
        goodsAttrVal: "普通系",
        color: "yellow",
        price: 9999,
        num: 2
      }
    };
  },

  created() {
    if (this.$route.query.num || this.$route.query.num === 0) {
      // 0 是false值，要单独判断
      //传入的num就是这个页面的第几页（page），和这里的num不一样，这里的num指商品数目
      this.page = this.$route.query.num;
      // console.log(this.page);
      if (getCookie("token") !== "未找到对应cookie") {
        getOrderData(getCookie("token")).then(() => {
          // console.log(data);
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
.orderList {
  &-empty {
    text-align: center;
    margin: 1.5rem 0 0 0;

    &-img {
      height: 3rem;
      width: 3rem;
      margin: auto;

      img {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
    }

    &-text {
      margin-top: 0.5rem;
      color: #9e9e9e;
      font-size: initial;
    }
  }
}
</style>
