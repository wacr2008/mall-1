<template>
  <div class="designer">
    <div class="designer-title van-hairline--bottom">
      <div class="designer-title-img">
        <img :src="title[0]" alt="err" />
      </div>
      <div class="designer-title-text">{{ title[1] }}</div>
      <van-button type="default" class="designer-title-btn">全部 ></van-button>
    </div>
    <div class="designer-contain">
      <van-grid square :border="false">
        <van-grid-item
          v-for="(avatar, index) in avatarImg"
          :key="index"
          v-lazy="avatar"
        >
          <div class="designer-contain-img">
            <img :src="avatar" alt="err" />
          </div>
          <div class="designer-contain-name">
            {{ designerName[index] }}
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
      name: "designer",
      title: [
        require("../../../assets/img/home/designer/designer.png"),
        "预约设计师"
      ],
      avatarImg: [
        require("../../../assets/img/home/designer/designer1.png"),
        require("../../../assets/img/home/designer/designer2.png"),
        require("../../../assets/img/home/designer/designer3.png"),
        require("../../../assets/img/home/designer/designer4.png"),
        require("../../../assets/img/home/designer/designer5.png"),
        require("../../../assets/img/home/designer/designer6.png"),
        require("../../../assets/img/home/designer/designer7.png"),
        require("../../../assets/img/home/designer/designer8.png")
      ],
      designerName: [
        "张伟",
        "许青云",
        "陈迪",
        "何丽",
        "张伟",
        "许青云",
        "陈迪",
        "何丽"
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.designer-contain {
  &-img {
    height: 1.3rem;
    width: 1.3rem;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
}
</style>
