<template>
  <div class="cartEdit">
    <header>
      <button class="cartEdit-header-back" @click="getBack">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-back"></use>
        </svg>
      </button>
      <div class="cartEdit-header-title">
        <span>购物车</span>
        <span v-if="num !== 0">({{ num }})</span>
      </div>
      <div
        class="cartEdit-header-edit"
        @click="onClickFinish"
        v-show="ifFinishClick"
      >
        完成
      </div>
    </header>
    <div class="cartEdit-contain">
      <div class="cartEdit-contain-empty" v-if="num === 0">
        <div class="cartEdit-contain-empty-img">
          <img :src="require('../../assets/img/cart/EmptyCart.png')" />
        </div>
        <div
          class="cartEdit-contain-empty-text"
          v-if="token !== '未找到对应cookie'"
        >
          购物车还是空的
        </div>
      </div>
      <van-checkbox-group v-model="checked" ref="checkboxGroup">
        <div
          class="cartEdit-item"
          v-for="(x, index) in shopping"
          :key="index"
          v-show="shopping[index].num !== 0"
        >
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
              <van-stepper v-model="shopping_step_num[index]" disable-input />
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
      <div class="cartEdit-total-remove">
        <van-button type="danger" @click="onClickCancel">删除</van-button>
      </div>
    </div>
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <!--遮罩层-->
        <div class="block">
          <div class="block-title">
            提示
          </div>
          <div class="block-contain">
            确定要删除商品吗？
          </div>
          <div class="block-button">
            <button class="check" @click="onClickDelete">确认</button>
            <button @click="onClickCancel">取消</button>
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import { checkAll, checkTrueAll } from "../../components/checkRound.js";
import { getBack } from "../../components/utils.js";
import { modifyShoppingMessage, removeShoppingFromCart } from "../API/cart_API";
import { getCookie } from "../../components/cookie.js";

export default {
  name: "cartEdit",
  data() {
    return {
      token: "",
      num: 0,
      choose: false,
      checked: [],
      activeIcon: "#icon-yuan",
      inactiveIcon: "#icon-yuancircle46",
      allButton: false,
      shoppingImg: {},
      shopping: [],
      shopping_step_num: [], //需要将步进器的值单独绑定出来，否则num设为0，步进器会默认先设置成1
      ifFinishClick: false, //是否显示完成按钮
      show: false //删除按钮确认框
    };
  },
  methods: {
    onClickFinish() {
      this.shopping.forEach((e, i) => {
        if (e.num !== 0 && e.num !== this.shopping_step_num[i]) {
          modifyShoppingMessage(
            e.goodsId,
            this.shopping_step_num[i],
            this.token
          ).then(() => {
            this.$router.push("/cart");
          });
        }
      });
    },
    fromCheckAll() {
      checkAll(this.$refs.checkboxGroup);
      this.allButton = true;
    }, //  全选，如果已全选则全部取消全选

    fromCheckTrueAll() {
      checkTrueAll(this.$refs.checkboxGroup, this.$refs.judge, this.shopping);
    }, //与底部复选框进行绑定，若全选则自动勾选，否则取消勾选

    getBack, //返回上一页

    onClickDelete() {
      this.checked.forEach(e => {
        removeShoppingFromCart(this.shopping[e].id, this.token);
        this.shopping[e].num = 0;
        this.num--;
        this.show = !this.show;
      }); //删除选择的商品
    },

    onClickCancel() {
      this.show = !this.show;
    } //判断弹出框是否显示
  },
  created() {
    this.shopping = this.$route.query.shopping;
    this.shoppingImg = this.$route.query.shoppingImg;
    this.num = this.$route.query.shoppingNum;
    this.shopping.forEach((e, i) => {
      this.shopping_step_num[i] = e.num;
    });
    this.token = getCookie("token");
  },
  updated() {
    this.fromCheckTrueAll();
    this.shopping.forEach((e, i) => {
      if (e.num !== 0 && e.num !== this.shopping_step_num[i]) {
        this.ifFinishClick = true;
      }
    });
  }
};
</script>

<style scoped lang="scss">
@import "cartEdit";
</style>
