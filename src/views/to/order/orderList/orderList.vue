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
      <div class="div-space"></div>
      <div class="orderList-title" v-if="page === 0 || page === 1">
        111111
      </div>
      <div class="orderList-title" v-if="page === 0 || page === 2">
        222222
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "orderList",
  data() {
    return {
      page: 0, //第N页
      num: 1, //当页的数据量
      emptyImg: require("../../../../assets/img/to/order/emptyOrder.png")
    };
  },

  created() {
    if (this.$route.query.num || this.$route.query.num === 0) {
      // 0 是false值，要单独判断
      this.page = this.$route.query.num;
      // console.log(this.page);
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
