<template>
  <div class="position">
    <header class="position-header">
      <van-button type="default" class="position-header-back" to="/">
        <svg class="position-header-back-img" aria-hidden="true">
          <use href="#icon-back"></use>
        </svg>
      </van-button>
      <van-search
        v-model="value"
        placeholder="请输入城市/拼音"
        class="position-header-search"
        left-icon=""
        show-action
        @search="onSearch"
      >
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
    </header>
    <div class="position-now  van-hairline--bottom  van-hairline--top">
      当前定位：{{ nowCity }}
    </div>
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="#" class="header-hot">
        热门城市
      </van-index-anchor>
      <div class="header-hot-example">
        <div
          class="header-hot-example-item"
          v-for="name in hotCity"
          :key="name"
          @click="changeNowCity(name)"
        >
          {{ name }}
        </div>
      </div>
      <van-index-anchor index="A">A</van-index-anchor>
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-index-anchor index="B">B</van-index-anchor>
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
    </van-index-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "position",
      nowCity: "杭州市",
      indexList: [
        "#",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ],
      hotCity: [
        "北京市",
        "天津市",
        "上海市",
        "成都市",
        "广州市",
        "南京市",
        "武汉市",
        "厦门市",
        "重庆市",
        "长沙市"
      ]
    };
  },
  methods: {
    changeNowCity(name) {
      this.nowCity = name;
      console.log(this.nowCity);
    }
  }
};
</script>

<style scoped lang="scss">
@import "position.scss";
</style>
