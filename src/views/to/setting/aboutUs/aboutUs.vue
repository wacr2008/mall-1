<template>
  <div class="aboutUs">
    <div class="aboutUs-logo">
      <img
        :src="require('../../../../assets/img/to/setting/aboutUs/logo.png')"
        alt="err"
      />
    </div>
    <van-cell-group>
      <van-cell title="功能介绍" is-link />
      <van-cell title="公司介绍" is-link />
      <van-cell title="检查新版本" is-link />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "aboutUs"
};
</script>

<style scoped lang="scss">
.aboutUs {
  height: calc(100% - 1rem);

  &-logo {
    height: 3rem;
    width: 60%;
    margin: auto;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .van-cell {
    border-bottom: 0.5px solid #dedede;
  }
}
</style>
