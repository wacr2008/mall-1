<template>
  <div class="orderDetail">
    <div class="orderDetail-topPart">
      <button class="orderDetail-topPart-back" @click="getBackToList">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-back"></use>
        </svg>
      </button>
      <div class="orderDetail-topPart-title">订单详情</div>
    </div>
    <div class="orderDetail-contain">
      <div class="div-space"></div>
      <div class="orderDetail-contain-state">
        <div class="orderDetail-contain-state-text">
          <div class="orderDetail-contain-state-text-state">
            {{ arriveList[3] }}
          </div>
          <div class="orderDetail-contain-state-text-time">
            {{ arriveList[7] }}
          </div>
        </div>
        <div class="orderDetail-contain-state-more">
          >
        </div>
      </div>
      <div class="div-space"></div>
      <div class="orderDetail-contain-place">
        div.orderDetail-contain-place
      </div>
    </div>
  </div>
</template>

<script>
import { getOrderState } from "../../../API/order_API.js";

export default {
  name: "orderDetail",
  data() {
    return {
      arriveList: []
    };
  },
  methods: {
    getBackToList() {
      this.$router.push({
        path: "/order",
        query: {
          num: 0
        }
      });
    }
  },
  created() {
    getOrderState().then(data => {
      this.arriveList = data[data.length - 1].split('"');
      console.log(this.arriveList);
    });
  }
};
</script>

<style scoped lang="scss">
.orderDetail {
  height: 100%;
  background-color: #f1f1f1;

  &-topPart {
    width: 100%;
    height: 1rem;
    background-color: #fff;
    display: flex;
    font-size: initial;
    align-items: center;
    position: relative;
    border-bottom: 1px solid #ececec;

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

  &-contain {
    width: 100%;

    &-state {
      width: 100%;
      background-color: #fff;
      font-size: initial;
      display: flex;
      align-items: center;

      &-text {
        margin: 0.2rem 0 0.2rem 0.2rem;
      }

      &-more {
        margin: 0 0.3rem 0 auto;
        color: #a2a2a2;
      }
    }
  }
}
</style>
