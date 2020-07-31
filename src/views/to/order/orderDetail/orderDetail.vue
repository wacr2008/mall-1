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
      <div class="orderDetail-contain-state">
        <!-- 物流状态 -->
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
      <div class="orderDetail-contain-receiver">
        <div class="orderDetail-contain-receiver-firstLine">
          <span class="orderDetail-contain-receiver-firstLine-name">
            {{ receiver.name }}
          </span>
          <span class="orderDetail-contain-receiver-firstLine-phone">
            {{ receiver.phone }}
          </span>
        </div>
        <div class="orderDetail-contain-receiver-secondLine">
          <span class="orderDetail-contain-receiver-secondLine-img">
            <img
              :src="require('../../../../assets/img/my/myOrder/place.png')"
              alt="err"
            />
          </span>
          <span class="orderDetail-contain-receiver-firstLine-place">
            {{ receiver.place }}
          </span>
        </div>
      </div>
      <div class="orderDetail-contain-shopping">
        <orderItem
          :shopping="shopping"
          topState="0"
          :bottomState="bottomState"
        />
      </div>
      <div class="orderDetail-contain-feeAndPrice">
        <van-cell-group>
          <van-cell title="运费" v-if="shipFee !== 0">
            <template #default>
              <span>快递 ￥{{ shipFee }}</span>
            </template>
          </van-cell>
          <van-cell title="运费" v-if="shipFee === 0" value="快递 免运费" />
          <van-cell title="实付款">
            <template #default>
              <span>￥{{ shopping.price * shopping.num + shipFee }}</span>
            </template>
          </van-cell>
        </van-cell-group>
      </div>
      <div class="orderDetail-contain-orderID">订单编号： {{ orderID }}</div>
    </div>
    <div class="orderDetail-bottomLine">
      <div class="orderDetail-bottomLine-waitingPay" v-if="bottomState === '1'">
        合计:
        <span class="orderDetail-bottomLine-waitingPay-total">
          ￥{{ shopping.price * shopping.num + shipFee }}
        </span>
        <div class="orderDetail-bottomLine-waitingPay-button">
          <van-button type="default" @click="onClickDefine">取消订单</van-button>
          <van-button type="danger" @click="onClickPay">立即付款</van-button>
        </div>
      </div>
      <div
        class="orderDetail-bottomLine-waitingSend"
        v-if="bottomState === '2'"
      >
        <van-button type="danger">提醒发货</van-button>
      </div>
      <div class="orderDetail-bottomLine-sending" v-if="bottomState === '3'">
        <div class="orderDetail-bottomLine-sending-button">
          <van-button type="default">查看物流</van-button>
          <van-button type="danger">确认收货</van-button>
        </div>
      </div>
      <div class="orderDetail-bottomLine-alreadyGet" v-if="bottomState === '4'">
        <van-button type="danger">评价</van-button>
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
import { getOrderState } from "../../../API/order_API.js";
import OrderItem from "../../../../components/orderItem.vue";

export default {
  name: "orderDetail",
  components: { OrderItem },
  data() {
    return {
      show: false,
      orderID: 123456789987,
      bottomState: "",
      arriveList: [],
      receiver: {
        name: "张三",
        phone: 15888888888,
        place: "浙江省杭州市江干区酱酱街道213号酿酿小区"
      },
      shopping: {
        img: require("../../../../assets/img/to/shoppingDetail/topImg1.png"),
        goodsName: "伊布",
        goodsAttr: "属性：",
        goodsAttrVal: "普通系",
        color: "yellow",
        price: 9999,
        num: 2
      },
      shipFee: 10
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
    },
    onClickPay() {
      this.$router.push("/waitingPay");
    },
    onClickDefine() {
      this.show = true;
    },
    onClickCancel() {
      this.show = false;
    }
  },
  created() {
    this.bottomState = this.$route.query.bottomState;
    getOrderState().then(data => {
      this.arriveList = data[data.length - 1].split('"');
    });
  }
};
</script>

<style scoped lang="scss">
@import "orderDetail";
</style>
