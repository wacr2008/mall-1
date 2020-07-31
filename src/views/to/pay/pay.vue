<template>
  <div class="pay">
    <header>
      <button class="pay-header-back" @click="getBack">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-back"></use>
        </svg>
      </button>
      <div class="pay-header-title">
        确认订单
      </div>
    </header>
    <div class="receiver" @click="onClickChangeLocation">
      <div class="receiver-firstLine">
        <span class="receiver-firstLine-name">{{ user.name }}</span>
        <span class="receiver-firstLine-phone">{{ user.phone }}</span>
      </div>
      <div class="receiver-position">
        {{ user.position }}
      </div>
    </div>
    <div class="shoppingList" v-for="(item, index) in shopping" :key="index">
      <orderItem :shopping="item" top-state="5" />
    </div>
    <div class="otherMessage">
      <div class="otherMessage-firstLine">
        <div class="otherMessage-firstLine-title">
          配送方式
        </div>
        <div class="otherMessage-firstLine-contain">
          快递 免邮 >
        </div>
      </div>
      <div class="otherMessage-secondLine">
        <van-checkbox v-model="checked" @click="onClickChoose">
          使用1000积分抵扣 98元
        </van-checkbox>
      </div>
    </div>
    <div class="bottomLine">
      <div class="bottomLine-leftPart">
        <div class="bottomLine-leftPart-firstLine">
          合计：
          <span>￥{{ totalPrice }}</span>
        </div>
        <div class="bottomLine-leftPart-secondLine">共{{ num }}件商品</div>
      </div>
      <div class="bottomLine-rightBtn">
        <van-button type="danger" @click="onClickSubmit">提交</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getBack } from "../../../components/utils.js";
import orderItem from "../../../components/orderItem.vue";
import {Toast} from "vant";

export default {
  name: "pay",
  components: { orderItem },
  data() {
    return {
      user: {
        name: "张三",
        phone: "15888888888",
        position: "浙江省杭州市江干区酱酱大道213号酿酿小区"
      },
      shopping: [
        {
          img: require("../../../assets/img/to/shoppingDetail/topImg1.png"),
          goodsName: "伊布",
          goodsAttr: "属性：",
          goodsAttrVal: "普通系",
          color: "yellow",
          price: 9999,
          num: 2
        }
      ],
      checked: true, //复选框判断
      totalPrice: 0,
      num: 0 //总数
    };
  },
  methods: {
    getBack,

    getTotalPrice() {
      let price = 0;
      this.num = 0;
      this.shopping.forEach(e => {
        price += e.num * e.price;
        this.num++;
      }); //自动计算实付价格
      this.totalPrice = price;
      if (this.checked) {
        this.totalPrice = price - 98;
      } //如果用户勾选了用积分减免，则价格 -98，可修改
    },

    onClickChoose() {
      this.getTotalPrice();
    }, // 点击事件，是否使用积分减免

    onClickSubmit() {
      Toast.success("提交成功");
      setTimeout(() => {
        this.$router.push("/waitingPay");
      }, 2000);
    }, // 提交按钮,2s后跳到支付页面

    onClickChangeLocation() {
      this.$router.push({
        path: "/myLocation",
        query: {
          from: "pay"
        }
      });
    }
  },

  created() {
    this.getTotalPrice();
  }
};
</script>

<style scoped lang="scss">
@import "pay";
</style>
