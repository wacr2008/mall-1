<template>
  <div class="myOtherOptions">
    <van-cell
      value="会员等级"
      :icon="require('../../../assets/img/my/myOtherOptions/VIP.png')"
      is-link
    />
    <van-cell
      value="我的积分"
      :icon="require('../../../assets/img/my/myOtherOptions/integral.png')"
      is-link
    />
    <van-cell
      value="我的卡券"
      :icon="require('../../../assets/img/my/myOtherOptions/card.png')"
      is-link
    />
    <div class="div-space"></div>
    <van-cell
      value="我的评价"
      :icon="require('../../../assets/img/my/myOtherOptions/evaluation.png')"
      is-link
    />
    <van-cell
      value="维权退款"
      :icon="require('../../../assets/img/my/myOtherOptions/refund.png')"
      is-link
    />
    <div class="div-space"></div>
    <van-cell
      value="我的预约体验"
      :icon="require('../../../assets/img/my/myOtherOptions/experience.png')"
      is-link
    />
    <van-cell
      value="我的预约设计"
      :icon="require('../../../assets/img/my/myOtherOptions/design.png')"
      is-link
    />
  </div>
</template>

<script>
export default {
  name: "myOtherOptions"
};
</script>

<style scoped></style>
