<template>
  <div class="order-item">
    <div class="div-space"></div>
    <div class="order-item-title" @click="onClickOrderDetail">
      <div class="order-item-title-name">
        {{ shopping.goodsName }}
      </div>
      <div class="order-item-title-waitingPay" v-if="topState === '1'">
        等待买家付款
      </div>
      <div class="order-item-title-waitingSend" v-if="topState === '2'">
        待发货
      </div>
      <div class="order-item-title-waitingArrive" v-if="topState === '3'">
        卖家已发货
      </div>
      <div class="order-item-title-waitingRecommend" v-if="topState === '4'">
        待评价
      </div>
    </div>
    <div class="order-item-contain" @click="onClickOrderDetail">
      <div class="order-item-contain-img">
        <img :src="shopping.img" />
      </div>
      <div class="order-item-contain-detail">
        <div class="order-item-contain-detail-title">
          {{ shopping.goodsName }}
        </div>
        <div class="order-item-contain-detail-size">
          {{ shopping.goodsAttr }}:
          {{ shopping.goodsAttrVal }}
        </div>
        <div class="order-item-contain-detail-color">
          {{ shopping.color }}
        </div>
        <div class="order-item-contain-detail-priceOrNum">
          <div class="order-item-contain-detail-priceOrNum-price">
            ￥{{ shopping.price }}
          </div>
          <div class="order-item-contain-detail-priceOrNum-num">
            x{{ shopping.num }}
          </div>
        </div>
      </div>
    </div>
    <div class="order-item-contain-total">
      <div class="order-item-contain-total-num">
        共 {{ shopping.num }} 件商品
      </div>
      <div class="order-item-contain-total-price">
        合计： ￥{{ shopping.price * shopping.num }}
      </div>
    </div>
    <div class="order-item-contain-buttons" v-if="topState !== '0'">
      <div
        class="order-item-contain-buttons-define"
        v-if="bottomState === '1'"
        @click="onClickCancelOrder"
      >
        取消订单
      </div>
      <div
        class="order-item-contain-buttons-pay"
        v-if="bottomState === '1'"
        @click="onClickPay"
      >
        付款
      </div>
      <div
        class="order-item-contain-buttons-remind"
        v-if="bottomState === '2'"
        @click="onClickRemind"
      >
        提醒发货
      </div>
      <div
        class="order-item-contain-buttons-findWay"
        v-if="bottomState === '3'"
        @click="onClickFindWay"
      >
        查看物流
      </div>
      <div
        class="order-item-contain-buttons-checkGet"
        v-if="bottomState === '3'"
        @click="onClickCheckGet"
      >
        确认收货
      </div>
      <div
        class="order-item-contain-buttons-recommend"
        v-if="bottomState === '4'"
        @click="onClickRecommend"
      >
        评价
      </div>
    </div>
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <!--遮罩层-->
        <div class="block">
          <div class="block-title">
            提示
          </div>
          <div class="block-contain">
            确定要取消订单吗？
          </div>
          <div class="block-button">
            <button class="check">确认</button>
            <button @click="onClickCancel">取消</button>
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "orderItem",
  data() {
    return {
      show: false
    };
  },
  props: {
    shopping: {},
    topState: String,
    //顶部显示判断
    bottomState: String
    //底部显示判断
  },
  methods: {
    onClickCancelOrder() {
      this.show = true;
    },
    onClickPay() {
      this.$router.push("/waitingPay");
    },
    onClickRemind() {
      Toast("提醒已发送给卖家");
    },
    onClickFindWay() {
      console.log("查看物流");
    },
    onClickCheckGet() {
      console.log("确认收货");
    },
    onClickRecommend() {
      console.log("评价");
    },
    onClickCancel() {
      this.show = false;
    },
    onClickOrderDetail() {
      if (this.topState !== "0") {
        this.$router.push({
          path: "/orderDetail",
          query: {
            bottomState: this.bottomState
          }
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
.order-item {
  width: 100%;
  background-color: #fff;

  &-title {
    height: 0.8rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e9e9e9;

    &-name {
      margin-left: 0.5rem;
      font-size: initial;
      font-weight: 600;
    }

    &-waitingPay,
    &-waitingSend,
    &-waitingArrive,
    &-waitingRecommend {
      margin: 0 0.3rem 0 auto;
      color: #d72d2d;
    }
  }

  &-contain {
    height: 2.4rem;
    border-bottom: 1px solid #e9e9e9;
    display: flex;
    align-items: center;

    &-round {
      font-size: medium;
      margin: 0 0.2rem;
      color: #dddddd;
      width: 8%;
    }

    &-img {
      height: 2rem;
      width: 32%;
      margin: 0 0.2rem;

      img {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
    }

    &-detail {
      width: 60%;

      &-title {
        font-size: larger;
        margin: 0.05rem 0;
      }

      &-size,
      &-color {
        color: #919191;
        margin: 0.05rem 0;
      }

      &-priceOrNum {
        display: flex;
        margin: 0.05rem 0;
        font-size: initial;

        &-price {
          color: red;
        }

        &-num {
          margin: 0 0.5rem 0 auto;
        }
      }
    }

    &-total {
      padding: 0.1rem 0;
      display: flex;
      justify-content: flex-end;
      font-size: initial;
      border-bottom: 1px solid #e9e9e9;
      height: 0.7rem;

      &-num,
      &-price {
        margin-right: 0.3rem;
      }
    }

    &-buttons {
      height: 0.95rem;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      div {
        border: 1px solid;
        border-radius: 2rem;
        padding: 0.1rem;
        margin-right: 0.3rem;
        width: 1.3rem;
        text-align: center;
      }

      &-pay,
      &-remind,
      &-checkGet,
      &-recommend {
        color: #d72d2d;
        border: 1px solid #d72d2d;
      }
    }
  }
  .wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .block {
      width: 4rem;
      height: 2.4rem;
      background-color: #fff;
      text-align: center;

      &-title,
      &-contain,
      &-button {
        height: 0.8rem;
        line-height: 0.8rem;
        border-bottom: 1px solid #f6f6f6;
      }

      &-button {
        display: flex;

        button {
          width: 50%;
        }

        .check {
          border-right: 1px solid #f6f6f6;
        }
      }
    }
  }
}
</style>
