<template>
  <div class="theme-recommend">
    <div class="theme-recommend-title van-hairline--bottom">
      <div class="theme-recommend-title-img">
        <img :src="title[0]" alt="err" />
      </div>
      <div class="theme-recommend-title-text">{{ title[1] }}</div>
      <van-button type="default" class="theme-recommend-title-btn">全部 ></van-button>
    </div>
    <div class="theme-recommend-contain">
      <div
        class="theme-recommend-contain-item"
        v-for="(img, index) in itemImg"
        :key="index"
        v-lazy="img"
      >
        <div class="theme-recommend-contain-item-imgShow">
          <img :src="img" alt="err" />
        </div>
        <div class="theme-recommend-contain-item-itemName">
          {{ itemName[index] }}
        </div>
        <div class="theme-recommend-contain-item-detail">
          <div class="theme-recommend-contain-item-detail-comment">
            <div class="theme-recommend-contain-item-detail-comment-img">
              <img :src="iconImg[0]" alt="err" />
            </div>
            <p class="theme-recommend-contain-item-detail-comment-num">
              {{ commentNum[index] }}
            </p>
          </div>
          <div class="theme-recommend-contain-item-detail-collect">
            <div class="theme-recommend-contain-item-detail-collect-img">
              <img :src="iconImg[1]" alt="err" />
            </div>
            <p class="theme-recommend-contain-item-detail-collect-num">
              {{ collectNum[index] }}
            </p>
          </div>
          <div class="theme-recommend-contain-item-detail-good">
            <div class="theme-recommend-contain-item-detail-good-img">
              <img :src="iconImg[2]" alt="err" />
            </div>
            <p class="theme-recommend-contain-item-detail-good-num">
              {{ goodNum[index] }}
            </p>
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
      name: "theme_recommend",
      title: [
        require("../../../assets/img/home/themeRecommend/theme.png"),
        "主题推荐"
      ],
      itemImg: [
        require("../../../assets/img/home/themeRecommend/theme1.png"),
        require("../../../assets/img/home/themeRecommend/theme2.png"),
        require("../../../assets/img/home/themeRecommend/theme3.png"),
        require("../../../assets/img/home/themeRecommend/theme4.png")
      ],
      iconImg: [
        require("../../../assets/img/home/themeRecommend/comment.png"),
        require("../../../assets/img/home/themeRecommend/collect.png"),
        require("../../../assets/img/home/themeRecommend/good.png")
      ],
      itemName: [
        "小户型简约北欧风格1",
        "小户型简约北欧风格2",
        "小户型简约北欧风格3",
        "小户型简约北欧风格4"
      ],
      commentNum: [1, 2, 3, 4],
      collectNum: [4, 5, 6, 7],
      goodNum: [7, 8, 9, 10]
    };
  }
};
</script>

<style scoped lang="scss">
@import "theme_recommend.scss";
</style>
