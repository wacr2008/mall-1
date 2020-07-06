<template>
  <div class="cartEdit">
    <header>
      <button class="cartEdit-header-back" @click="getBack">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-back"></use>
        </svg>
      </button>
      <div class="cartEdit-header-title">购物车 ({{ num }})</div>
      <div class="cartEdit-header-edit" @click="onClickFinish">
        完成
      </div>
    </header>
    <div class="cartEdit-contain">
      <van-checkbox-group v-model="checked" ref="checkboxGroup">
        <div class="cartEdit-item" v-for="(x, index) in shopping" :key="index">
          <div class="div-space"></div>
          <div class="cartEdit-item-title">
            <van-checkbox :name="index">
              <template #icon="props">
                <div class="cartEdit-item-title-round">
                  <svg class="icon" aria-hidden="true">
                    <use
                      :xlink:href="props.checked ? activeIcon : inactiveIcon"
                    ></use>
                  </svg>
                  {{ shopping[index].goodsName }}
                </div>
              </template>
            </van-checkbox>
          </div>
          <div class="cartEdit-item-contain">
            <div class="cartEdit-item-contain-round">
              <van-checkbox :name="index">
                <template #icon="props">
                  <div class="cartEdit-item-contain-round">
                    <svg class="icon" aria-hidden="true">
                      <use
                        :xlink:href="props.checked ? activeIcon : inactiveIcon"
                      ></use>
                    </svg>
                  </div>
                </template>
              </van-checkbox>
            </div>
            <div class="cartEdit-item-contain-img">
              <img :src="shoppingImg[`index${index}`]" alt="err" />
            </div>
            <div class="cartEdit-item-contain-addOrReduce">
              <van-stepper
                v-model="shopping[index].num"
                disable-input
                :max="shoppingMax[index]"
              />
            </div>
          </div>
          <div class="cartEdit-item-message" v-if="!shopping[index].bbs">
            <div class="cartEdit-item-message-box">暂未编辑留言</div>
          </div>
          <div class="cartEdit-item-message" v-if="shopping[index].bbs">
            <div class="cartEdit-item-message-box">
              {{ shopping[index].bbs }}
            </div>
          </div>
        </div>
      </van-checkbox-group>
    </div>
    <div class="cartEdit-total">
      <van-checkbox v-model="choose" @click="fromCheckAll" ref="judge">
        全选
      </van-checkbox>
      <div class="cartEdit-total-collect">
        <van-button type="default">收藏</van-button>
      </div>
      <div class="cartEdit-total-remove">
        <van-button type="danger">删除</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { checkAll, checkTrueAll } from "../../components/checkRound.js";
import {getBack} from "../../components/utils.js";

export default {
  name: "cartEdit",
  data() {
    return {
      num: 0,
      choose: false,
      checked: [],
      activeIcon: "#icon-yuan",
      inactiveIcon: "#icon-yuancircle46",
      allButton: false,
      shoppingImg: {},
      shopping: [],
      shoppingMax: []
    };
  },
  methods: {
    onClickFinish() {
      this.$router.push("/cart");
    },
    fromCheckAll() {
      checkAll(this.$refs.checkboxGroup);
      this.allButton = true;
    }, //  全选，如果已全选则全部取消全选

    fromCheckTrueAll() {
      checkTrueAll(this.$refs.checkboxGroup, this.$refs.judge);
    }, //与底部复选框进行绑定，若全选则自动勾选，否则取消勾选

    getBack //返回上一页
  },
  created() {
    this.shopping = this.$route.query.shopping;
    this.shoppingImg = this.$route.query.shoppingImg;
    this.num = this.$route.query.shoppingNum;
    for (let i = 0; i < this.shopping.length; i++) {
      this.shoppingMax[i] = this.shopping[i].num;
    }
  },
  updated() {
    this.fromCheckTrueAll();
  }
};
</script>

<style scoped lang="scss">
@import "cartEdit";
</style>
