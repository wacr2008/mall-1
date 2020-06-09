<template>
  <div class="allCustom">
    <div class="allCustom-title van-hairline--bottom">
      <div class="allCustom-title-img">
        <img :src="title[0]" alt="err" />
      </div>
      <div class="allCustom-title-text">{{ title[1] }}</div>
      <van-button type="default" class="allCustom-title-btn">全部 ></van-button>
    </div>
    <div class="allCustom-contain">
      <div
        class="allCustom-contain-item"
        v-for="(poster, index) in posterImg"
        :key="index"
        v-lazy="poster"
      >
        <div class="allCustom-contain-item-poster">
          <div class="allCustom-contain-item-poster-img">
            <img :src="poster" alt="err" />
          </div>
          <div class="allCustom-contain-item-poster-title">
            {{ posterTitle[index] }}
          </div>
        </div>
        <div class="allCustom-contain-item-smallItem">
          <div
            class="allCustom-contain-item-smallItem-img van-hairline--surround"
            v-for="(sImg, index1) in smallImg"
            :key="index1"
            v-lazy="sImg"
          >
            <img :src="sImg" alt="err" />
            <div class="blackboard" v-if="index1 === 4">
              <span class="p1">共</span>
              <span class="blackboard-num">{{ blackBoard[index] }}</span>
              <span class="p2">件</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="div-space"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "all_custom",
      title: [
        require("../../../assets/img/home/allCustom/allCustom.png"),
        "全屋定制"
      ],
      posterImg: [
        require("../../../assets/img/home/allCustom/poster1.png"),
        require("../../../assets/img/home/allCustom/poster2.png"),
        require("../../../assets/img/home/allCustom/poster3.png")
      ],
      posterTitle: [
        "北欧风格小户型全屋设计1",
        "北欧风格小户型全屋设计2",
        "北欧风格小户型全屋设计3"
      ],
      smallImg: [
        require("../../../assets/img/home/allCustom/small1.png"),
        require("../../../assets/img/home/allCustom/small2.png"),
        require("../../../assets/img/home/allCustom/small3.png"),
        require("../../../assets/img/home/allCustom/small4.png"),
        require("../../../assets/img/home/allCustom/small5.png")
      ],
      blackBoard: [6, 7, 8]
    };
  }
};
</script>

<style scoped lang="scss">
@import "all_custom.scss";
</style>
