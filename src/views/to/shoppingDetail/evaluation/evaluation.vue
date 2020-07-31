<template>
  <div class="evaluation">
    <div class="evaluation-title van-hairline--bottom">
      <div class="evaluation-title-text">
        用户评价
      </div>
      <div class="evaluation-title-more" @click="onClickMore">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-qianjin"></use>
        </svg>
      </div>
    </div>
    <div class="evaluation-customer">
      <div class="evaluation-customer-avatar">
        <van-image round :src="customer.avatar" />
      </div>
      <div class="evaluation-customer-information">
        <div class="evaluation-customer-information-name">
          {{ customer.name }}
        </div>
        <div class="evaluation-customer-information-shoppingImf">
          {{ customer.shoppingDetail.shoppingLength }}
          {{ customer.shoppingDetail.shoppingMaterial }}
          {{ customer.shoppingDetail.shoppingColor }}
        </div>
      </div>
      <div class="evaluation-customer-responseTime">
        {{ customer.response.time }}
      </div>
    </div>
    <div class="evaluation-contain">
      <div class="evaluation-contain-text">
        {{ customer.response.contain }}
      </div>
      <div class="evaluation-contain-img">
        <div
          class="evaluation-contain-img-item"
          v-for="img in customer.response.img"
          :key="img"
        >
          <img :src="img" alt="err" v-lazy="img">
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
      customer: {
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
      }
    };
  },
  methods: {
    onClickMore(){
      this.$router.push("/shoppingDetail/evaluationAll")
    }
  }
};
</script>

<style scoped lang="scss">
@import "evaluation";
</style>
