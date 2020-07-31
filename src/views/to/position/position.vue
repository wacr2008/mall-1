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
        placeholder="请输入城市名"
        class="position-header-search"
        left-icon=""
        show-action
        @input="searchPo"
        @focus="downShow"
      >
        <template #action>
          <div @click="onClickCheck">确定</div>
        </template>
      </van-search>
      <div class="downShow" v-show="show">
        <div
          class="downShow-item"
          v-for="item in citySearch"
          :key="item"
          @click="placeItemClick(item)"
        >
          {{ item }}
        </div>
      </div>
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
import { getPosition, searchPosition } from "../../API/home_API.js";

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
      ],
      show: false,
      citySearch: []
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
    searchPo(e) {
      this.citySearch = [];
      if (e !== "") {
        searchPosition(e).then(data => {
          const getData = data.data.data;
          getData.forEach(e => {
            this.citySearch.push(e.name);
          });
        });
      } else {
        this.citySearch.push("无数据");
      }
    },
    downShow() {
      this.show = true;
    }, //输入框获得焦点时弹出下拉框
    onClickCheck() {
      this.$router.push({
        path: "/home",
        query: {
          place: this.nowCity
        }
      });
    },
    placeItemClick(name) {
      this.value = name;
      this.nowCity = name;
      this.show = false;
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
