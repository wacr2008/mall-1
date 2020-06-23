<template>
  <div class="evaluation-all">
    <div class="evaluation-title van-hairline--bottom">
      <div class="evaluation-title-back" @click="onClickBack">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-back"></use>
        </svg>
      </div>
      <div class="evaluation-title-text">
        用户评价
      </div>
    </div>
    <div
      class="evaluation-item"
      v-for="(customerItem, index) in customer"
      :key="index"
    >
      <div class="evaluation-customer">
        <div class="evaluation-customer-avatar">
          <van-image round :src="customerItem.avatar" />
        </div>
        <div class="evaluation-customer-information">
          <div class="evaluation-customer-information-name">
            {{ customerItem.name }}
          </div>
          <div class="evaluation-customer-information-shoppingImf">
            {{ customerItem.shoppingDetail.shoppingLength }}
            {{ customerItem.shoppingDetail.shoppingMaterial }}
            {{ customerItem.shoppingDetail.shoppingColor }}
          </div>
        </div>
        <div class="evaluation-customer-responseTime">
          {{ customerItem.response.time }}
        </div>
      </div>
      <div class="evaluation-contain">
        <div class="evaluation-contain-text">
          {{ customerItem.response.contain }}
        </div>
        <div class="evaluation-contain-img" v-if="customerItem.response.img">
          <div
            class="evaluation-contain-img-item"
            v-for="img in customerItem.response.img"
            :key="img"
          >
            <img :src="img" alt="err" v-lazy="img">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "evaluation",
      customer: [
        {
          avatar: require("../../../../assets/img/to/shoppingDetail/avatar.png"),
          name: "那些花儿",
          shoppingDetail: {
            shoppingLength: "1.5米",
            shoppingMaterial: "白橡木",
            shoppingColor: "胡桃色"
          },
          response: {
            time: "2017-6-23",
            contain: "颜色淡雅，非常漂亮",
            img: [
              require("../../../../assets/img/to/shoppingDetail/response1.png"),
              require("../../../../assets/img/to/shoppingDetail/response2.png"),
              require("../../../../assets/img/to/shoppingDetail/response3.png")
            ]
          }
        },
        {
          avatar: require("../../../../assets/img/to/shoppingDetail/avatar2.png"),
          name: "那些花儿",
          shoppingDetail: {
            shoppingLength: "1.5米",
            shoppingMaterial: "白橡木",
            shoppingColor: "胡桃色"
          },
          response: {
            time: "2017-6-24",
            contain: "颜色淡雅，非常漂亮"
          }
        },
        {
          avatar: require("../../../../assets/img/to/shoppingDetail/avatar.png"),
          name: "花儿",
          shoppingDetail: {
            shoppingLength: "1.5米",
            shoppingMaterial: "白橡木",
            shoppingColor: "胡桃色"
          },
          response: {
            time: "2017-6-23",
            contain: "颜色淡雅，非常漂亮",
            img: [
              require("../../../../assets/img/to/shoppingDetail/response1.png"),
              require("../../../../assets/img/to/shoppingDetail/response2.png"),
              require("../../../../assets/img/to/shoppingDetail/response3.png")
            ]
          }
        },
        {
          avatar: require("../../../../assets/img/to/shoppingDetail/avatar2.png"),
          name: "花儿",
          shoppingDetail: {
            shoppingLength: "1.5米",
            shoppingMaterial: "白橡木",
            shoppingColor: "胡桃色"
          },
          response: {
            time: "2017-6-24",
            contain: "颜色淡雅，非常漂亮"
          }
        }
      ]
    };
  },
  methods: {
    onClickBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang="scss">
@import "evaluationAll";
</style>
