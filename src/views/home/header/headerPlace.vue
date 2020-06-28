<template>
  <div class="headerPlace">
    <header>
      <van-button type="default" class="header-place" to="/position">
        <span class="header-place-specific">杭州</span>
        <span class="header-place-moreImg">
          <img
            src="../../../assets/img/layout/header/rightIcon.png"
            alt="error"
          />
        </span>
      </van-button>
      <label class="header-search">
        <div class="header-search-left" @click="gotoLink">
          <div class="header-search-left-type">商品</div>
          <div class="header-search-left-downIcon">
            <img
              src="../../../assets/img/layout/header/downIcon.png"
              alt="err"
            />
          </div>
        </div>
        <input type="text" placeholder="请输入搜索关键词" />
      </label>
      <van-button
        :icon="images"
        type="default"
        to="cart"
        class="header-shopping-cart"
      />
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "headerPlace",
      images: require("../../../assets/img/layout/header/cart.png")
    };
  },
  methods: {
    gotoLink() {
      this.$router.push("/shoppingSearch");
    }
  }
};
</script>

<style scoped lang="scss">
@import "headerPlace";
</style>
