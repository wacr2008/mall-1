<template>
  <div class="myOrder">
    <div class="myOrder-topPart">
      <button class="myOrder-topPart-back" @click="getBackToMy">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-back"></use>
        </svg>
      </button>
      <div class="myOrder-topPart-title">我的订单</div>
    </div>
    <div class="myOrder-nav">
      <van-tabs v-model="active" swipeable @change="onClickTab">
        <van-tab
          v-for="(tab, index) in tabs"
          :key="index"
          :title="tab.title"
          :name="tab.page"
        >
          <router-view />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { getOrderData } from "../../API/order_API.js";
import { getCookie } from "../../../components/cookie.js";

export default {
  name: "myOrder",
  data() {
    return {
      active: 0,
      tabs: [
        { title: "全部订单", page: 0 },
        { title: "待付款", page: 1 },
        { title: "待发货", page: 2 },
        { title: "配送中", page: 3 },
        { title: "待评价", page: 4 }
      ]
    };
  },
  methods: {
    getBackToMy() {
      this.$router.push("/my");
    },
    onClickTab(name) {
      this.$router.push({
        path: "/order",
        query: { num: name }
      });
    }
  },
  created() {
    if (getCookie("token") && getCookie("token") !== "未找到对应cookie") {
      getOrderData(getCookie("token"));
    }
    if (this.$route.query.num || this.$route.query.num === 0) {
      this.active = this.$route.query.num;
    }
    this.$router.push({
      path: "/order",
      query: { num: this.active }
    });
  }
};
</script>

<style scoped lang="scss">
.myOrder {
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
  &-nav {
    /deep/.van-tab {
      flex: 0;
      -webkit-flex: 0;
    }
  }

  .myOrder-nav {
    height: 100%;

    .van-tabs {
      height: 100%;

      /deep/.van-tabs__content {
        height: calc(100% - 44px - 1rem);
        overflow-y: auto;
      }
    }
  }
}
</style>
