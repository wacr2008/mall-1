<template>
  <div class="myOrder">
    <div class="myOrder-topLine">
      <div class="myOrder-topLine-text">
        我的订单
      </div>
      <button class="myOrder-topLine-button" @click="onClickMyOrder">
        查看全部订单>
      </button>
    </div>
    <div class="myOrder-order">
      <van-grid>
        <van-grid-item
          v-for="(item, index) in order"
          :key="index"
          @click="onClickMyOrderItem(index)"
        >
          <div class="myOrder-order-item-img">
            <img :src="item.img" alt="err" />
          </div>
          <span class="myOrder-order-item-text">{{ item.text }}</span>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="div-space"></div>
  </div>
</template>

<script>
export default {
  name: "myOrder",
  data() {
    return {
      order: [
        {
          img: require("../../../assets/img/my/myOrder/waitingPay.png"),
          text: "待付款"
        },
        {
          img: require("../../../assets/img/my/myOrder/waitingSend.png"),
          text: "待发货"
        },
        {
          img: require("../../../assets/img/my/myOrder/alreadySend.png"),
          text: "配送中"
        },
        {
          img: require("../../../assets/img/my/myOrder/waitingPing.png"),
          text: "待评价"
        }
      ]
    };
  },
  methods: {
    onClickMyOrder() {
      this.$router.push("/order");
    },
    onClickMyOrderItem(index) {
      this.$router.push({
        path: "/order",
        query: {
          num: index + 1
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import "myOrder";
</style>
