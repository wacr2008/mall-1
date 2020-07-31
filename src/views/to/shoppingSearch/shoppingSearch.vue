<template>
  <div class="shopping-search">
    <header class="shopping-search-header">
      <van-button type="default" class="shopping-search-header-back" to="/">
        <svg class="shopping-search-header-back-img" aria-hidden="true">
          <use href="#icon-back"></use>
        </svg>
      </van-button>
      <van-search
        v-model="value"
        placeholder="请输入关键字"
        class="shopping-search-header-search"
        show-action
        label="商品"
        :left-icon="require('../../../assets/img/layout/header/downIcon.png')"
      >
        <template #action>
          <div>搜索</div>
        </template>
      </van-search>
    </header>
    <div class="shopping-search-others van-hairline--bottom  van-hairline--top">
      <div class="shopping-search-others-title">
        大家都在搜
      </div>
      <div class="shopping-search-others-contain">
        <div
          class="shopping-search-others-contain-item"
          v-for="name in searchOthers"
          :key="name"
          @click="onClickValue(name)"
        >
          {{ name }}
        </div>
      </div>
    </div>
    <div class="div-space"></div>
    <div class="shopping-search-history">
      <div class="shopping-search-history-title">
        历史记录
      </div>
      <div class="shopping-search-history-contain">
        <div
          class="shopping-search-history-contain-item van-hairline--top"
          v-for="historyName in searchHistory"
          :key="historyName"
          @click="onClickValue(historyName)"
        >
          <div class="shopping-search-history-contain-item-clock">
            <img
              :src="
                require('../../../assets/img/to/shoppingSearch/history.png')
              "
              alt="err"
            />
          </div>
          <div class="shopping-search-history-contain-item-name">
            {{ historyName }}
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
      name: "shoppingSearch",
      value: "",
      searchOthers: [
        "床头柜",
        "简洁双开门衣柜",
        "可爱冰箱吸",
        "现代文艺吊灯",
        "小清新客厅绿植",
        "儿童床"
      ],
      searchHistory: ["原木茶几", "北欧风格两用沙发床"]
    };
  },
  methods: {
    onClickValue(name) {
      this.value = name;
    }
  }
};
</script>

<style scoped lang="scss">
@import "shoppingSearch";
</style>
