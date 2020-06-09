<template>
  <div class="experienceHall">
    <div class="experienceHall-title van-hairline--bottom">
      <div class="experienceHall-title-img">
        <img :src="title[0]" alt="err" />
      </div>
      <div class="experienceHall-title-text">{{ title[1] }}</div>
      <van-button type="default" class="experienceHall-title-btn">
        全部 >
      </van-button>
    </div>
    <div class="experienceHall-contain">
      <div
        class="experienceHall-contain-item"
        v-for="(img, index) in addressImg"
        :key="index"
        v-lazy="img"
      >
        <div class="experienceHall-contain-item-img">
          <img :src="img" alt="err" />
        </div>
        <div class="experienceHall-contain-item-address">
          {{ address[index] }}
        </div>
        <van-button
          type="danger"
          class="experienceHall-contain-item-btn"
          :block="true"
        >
          发送至手机
        </van-button>
      </div>
    </div>
    <div class="div-space"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "experience_hall",
      title: [
        require("../../../assets/img/home/experienceHall/experience.png"),
        "体验馆"
      ],
      addressImg: [
        require("../../../assets/img/home/experienceHall/experience1.png"),
        require("../../../assets/img/home/experienceHall/experience2.png")
      ],
      address: [
        "地址：浙江省杭州市余杭区酱酱小镇酿酿大道523号",
        "地址：浙江省杭州市余杭区酱酱小镇酿酿大道777号"
      ]
    };
  }
};
</script>

<style scoped lang="scss">
@import "experience_hall";
</style>
