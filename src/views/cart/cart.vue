<template>
  <div class="cart">
    <header>
      <button class="cart-header-back" @click="getBack">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-back"></use>
        </svg>
      </button>
      <div class="cart-header-title">
        购物车
        <span v-if="num !== 0">({{ num }})</span>
      </div>
      <div class="cart-header-edit" @click="onClickCartEdit">
        编辑
      </div>
    </header>
    <div class="cart-contain">
      <div class="cart-contain-empty" v-if="num === 0">
        <div class="cart-contain-empty-img">
          <img :src="require('../../assets/img/cart/EmptyCart.png')" />
        </div>
        <div
          class="cart-contain-empty-text"
          v-if="tokenGet !== '未找到对应cookie'"
        >
          购物车还是空的
        </div>
        <div
          class="cart-contain-empty-notLog"
          v-if="tokenGet === '未找到对应cookie'"
          @click="onClickLogIn"
        >
          您尚未登录，请先<span>登录</span>
        </div>
      </div>
      <van-checkbox-group v-model="checked" ref="checkboxGroup">
        <div class="cart-item" v-for="(x, index) in shopping" :key="index">
          <div class="div-space"></div>
          <div class="cart-item-title">
            <van-checkbox :name="index" @click="getTotalPrice">
              <template #icon="props">
                <div class="cart-item-title-round">
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
          <div class="cart-item-contain">
            <div class="cart-item-contain-round">
              <van-checkbox :name="index" @click="getTotalPrice">
                <template #icon="props">
                  <div class="cart-item-contain-round">
                    <svg class="icon" aria-hidden="true">
                      <use
                        :xlink:href="props.checked ? activeIcon : inactiveIcon"
                      ></use>
                    </svg>
                  </div>
                </template>
              </van-checkbox>
            </div>
            <div class="cart-item-contain-img">
              <img :src="shoppingImg[`index${index}`]" />
            </div>
            <div class="cart-item-contain-detail">
              <div class="cart-item-contain-detail-title">
                {{ shopping[index].goodsName }}
              </div>
              <div class="cart-item-contain-detail-size">
                {{ shopping[index].goodsAttr }}:
                {{ shopping[index].goodsAttrVal }}
              </div>
              <div class="cart-item-contain-detail-color">
                {{ shopping[index].color }}
              </div>
              <div class="cart-item-contain-detail-priceOrNum">
                <div class="cart-item-contain-detail-priceOrNum-price">
                  ￥{{ shopping[index].price }}
                </div>
                <div class="cart-item-contain-detail-priceOrNum-num">
                  x{{ shopping[index].num }}
                </div>
              </div>
            </div>
          </div>
          <div class="cart-item-message" v-if="!shopping[index].bbs">
            <div class="cart-item-message-box">暂未编辑留言</div>
            <div
              class="cart-item-message-button"
              @click="onClickMessage(index)"
            >
              留言
            </div>
          </div>
          <div class="cart-item-message" v-if="shopping[index].bbs">
            <div class="cart-item-message-box">
              {{ shopping[index].bbs }}
            </div>
            <div
              class="cart-item-message-button"
              @click="onClickMessage(index)"
            >
              修改
            </div>
          </div>
        </div>
      </van-checkbox-group>
    </div>
    <div class="cart-total">
      <van-checkbox v-model="choose" @click="fromCheckAll" ref="judge">
        全选
      </van-checkbox>
      <div class="cart-total-priceAll">
        <span class="cart-total-priceAll-text">
          合计：
        </span>
        <span class="cart-total-priceAll-price"> ￥{{ priceAll }} </span>
      </div>
      <van-button type="danger">去结算</van-button>
    </div>
  </div>
</template>

<script>
import { checkAll, checkTrueAll } from "../../components/checkRound.js";
import { getCartData } from "../API/cart_API.js";
import { getAllShoppingData } from "../API/all_shopping_API.js";
import { getImgRightPath, getBack } from "../../components/utils.js";
import { getCookie } from "../../components/cookie.js";

export default {
  name: "cart",
  data() {
    return {
      num: 0, //商品总数，显示在头部栏
      judge: false,
      checked: [],
      choose: false,
      activeIcon: "#icon-yuan",
      inactiveIcon: "#icon-yuancircle46",
      priceAll: 0,
      allButton: false,
      indexTrans: 0,
      shoppingImg: {},
      shopping: [],
      tokenGet: ""
    };
  },
  created() {
    this.getData();
  },
  updated() {
    if (!this.judge) {
      this.judge = true;
      this.getImg();
    }
    this.fromCheckTrueAll();
  },
  methods: {
    fromCheckAll() {
      checkAll(this.$refs.checkboxGroup);
      this.allButton = true;
      this.getTotalPrice();
    }, //  全选，如果已全选则全部取消全选

    fromCheckTrueAll() {
      checkTrueAll(this.$refs.checkboxGroup, this.$refs.judge);
    }, //与底部复选框进行绑定，若全选则自动勾选，否则取消勾选

    getTotalPrice() {
      this.priceAll = 0;
      if (!this.allButton) {
        this.$refs.checkboxGroup.children.forEach((e, j) => {
          if (e.$el.ariaChecked === "true" && j % 2 === 1) {
            this.priceAll +=
              this.shopping[parseInt(j / 2)].price *
              this.shopping[parseInt(j / 2)].num;
          }
        });
      } else {
        if (this.$refs.judge.$el.ariaChecked === "true") {
          this.$refs.checkboxGroup.children.forEach((e, j) => {
            if (j % 2 === 1) {
              this.priceAll +=
                this.shopping[parseInt(j / 2)].price *
                this.shopping[parseInt(j / 2)].num;
            }
          });
        } else {
          this.priceAll = 0;
        }
      }
      this.allButton = false;
    }, //获取已选商品的总价

    onClickCartEdit() {
      this.$router.push({
        path: "/cartEdit",
        query: {
          shoppingImg: this.shoppingImg,
          shopping: this.shopping,
          shoppingNum: this.num
        }
      });
    }, //跳转编辑页面

    onClickMessage(index) {
      this.$router.push({
        path: "/message",
        query: {
          message: this.shopping[index].bbs,
          img: this.shoppingImg[`index${index}`],
          title: this.shopping[index].goodsName,
          price: this.shopping[index].price,
          id: this.shopping[index].goodsId,
          indexTrans: index
        }
      });
    }, //跳转留言页面

    getBack, //回退按钮

    getData() {
      this.tokenGet = getCookie("token");
      if (this.tokenGet !== "未找到对应cookie") {
        getCartData(this.tokenGet).then(data => {
          if (data.data.msg === "查询成功") {
            data.data.data.forEach(e => {
              this.shopping.push(e);
              this.num++;
            });
          } else {
            console.log("无数据");
          }
        });
      } // 获取后端数据并存入本地
    },

    getImg() {
      this.shopping.forEach((e, i) => {
        getAllShoppingData(e.goodsId, e.goodsName).then(data => {
          this.shoppingImg[`index${i}`] = getImgRightPath(data[0].img);
          this.shoppingImg = { ...this.shoppingImg }; //重新绑定this，变为新的Vue对象
          return data;
        });
      });
    }, // 从另一个接口获得图片URL并存入本地
    onClickLogIn() {
      this.$router.push("/signIn");
    }
  }
};
</script>

<style scoped lang="scss">
@import "cart";
</style>
