<template>
  <div class="video">
    <div class="video-title van-hairline--bottom">
      <div class="video-title-img">
        <img :src="title[0]" alt="err" />
      </div>
      <div class="video-title-text">{{ title[1] }}</div>
      <van-button type="default" class="video-title-btn">全部 ></van-button>
    </div>
    <div class="video-contain">
      <van-grid :column-num="2" :border="false">
        <van-grid-item v-for="(img, index) in videoImg" :key="index" v-lazy="img">
          <van-image lazy-load :src="img" />
          <div class="video-contain-title">
            {{videoTitle[index]}}
          </div>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="div-space"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "video",
      title: [require("../../../assets/img/home/video/video.png"), "视频"],
      videoImg: [
        require("../../../assets/img/home/video/video1.png"),
        require("../../../assets/img/home/video/video2.png"),
        require("../../../assets/img/home/video/video3.png"),
        require("../../../assets/img/home/video/video4.png")
      ],
      videoTitle: [
        "易高家居宣传片1",
        "易高家居宣传片2",
        "易高家居宣传片3",
        "易高家居宣传片4"
      ]
    };
  }
};
</script>

<style scoped lang="scss">
@import "video.scss";
</style>
