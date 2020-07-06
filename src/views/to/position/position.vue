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
      >
        <template #action>
          <div>搜索</div>
        </template>
      </van-search>
    </header>
    <div class="position-now  van-hairline--bottom  van-hairline--top">
      当前定位：{{ nowCity }}
    </div>
    <van-index-bar :index-list="indexList">
      <div class="header-hot">
        <div class="header-hot-title">
          热门城市
        </div>
      </div>
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
      <van-index-anchor
        v-for="(item, indexItem) in indexList"
        :key="indexItem"
        :index="item"
      >
        {{ item }}
        <van-cell
          v-for="(itemPlace, index) in placeWithArr[item]"
          :key="index"
          :title="itemPlace.name"
          @click="onClickMessage($event)"
        />
      </van-index-anchor>
    </van-index-bar>
  </div>
</template>

<script>
import { getPosition } from "../../API/home_API.js";

export default {
  data() {
    return {
      value: "",
      name: "position",
      nowCity: "杭州市",
      indexList: [],
      placeWithArr: {},
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
    },
    getAllPositionList() {
      getPosition().then(data => {
        this.placeWithArr = data.data;
        const dataArr = Object.keys(data.data);
        dataArr.forEach(e => {
          this.indexList.push(e);
        });
      });
    },
    onClickMessage(e) {
      if (e.target.textContent) {
        this.nowCity = e.target.textContent;
      }
    },
    onClickSearch() {

    }
  },
  created() {
    this.getAllPositionList();
  }
};
</script>

<style scoped lang="scss">
@import "position.scss";
</style>
