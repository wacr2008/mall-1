<template>
  <div class="bottom-nav">
    <van-goods-action>
      <van-goods-action-icon
        v-for="(textContent, index) in text"
        :key="index"
        @click="onClickRouterTo(routerTo[index])"
      >
        <div class="bottom-nav-item">
          <div class="bottom-nav-item-icon">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="defaultIcon[index]"></use>
            </svg>
          </div>
          <div class="bottom-nav-item-text">
            {{ textContent }}
          </div>
        </div>
      </van-goods-action-icon>
      <van-goods-action-icon @click="onClickCollect">
        <div class="bottom-nav-item">
          <div class="bottom-nav-item-icon">
            <svg class="icon" aria-hidden="true">
              <use
                :xlink:href="collect ? '#icon-shoucang1' : '#icon-soucang'"
              ></use>
            </svg>
          </div>
          <div class="bottom-nav-item-text">
            收藏
          </div>
        </div>
      </van-goods-action-icon>
      <van-goods-action-button
        type="danger"
        text="选择商品规格"
        @click="onClickChangeShow"
      />
      <van-sku
        v-model="show"
        :sku="sku"
        :goods="goods"
        :goods-id="id"
        @add-cart="onClickAddToCart"
        @buy-clicked="onBuyClicked"
      />
    </van-goods-action>
  </div>
</template>

<script>
import {
  getAllShoppingData,
  getShoppingSku
} from "../../../API/all_shopping_API.js";
import { addShoppingToCart } from "../../../API/cart_API.js";
import {
  getImgRightPath,
  deduplication
} from "../../../../components/utils.js";
import { getName, listToSku } from "./listToSku.js";
import { getCookie } from "../../../../components/cookie.js";
import { Toast } from "vant";

export default {
  data() {
    return {
      id: 0, //商品id
      secondList: 0, //
      shopping: {},
      collect: false,
      show: false,
      name: "bottomNav",
      text: ["客服", "购物车"],
      defaultIcon: ["#icon-kefu", "#icon-gouwuche"],
      routerTo: ["", "/cart"],
      goods: {
        // 默认商品 sku 缩略图
        picture: require("../../../../assets/img/to/shoppingDetail/topImg1.png")
      },
      sku: {
        tree: [],
        list: []
      },
      idArr: [],
      valArr: []
    }; //商品具体属性列表
  },
  methods: {
    onClickRouterTo(sp) {
      this.$router.push(sp);
    }, //若以后需要添加客服界面，则可直接传入对应地址
    onClickCollect() {
      if (!this.collect) {
        this.collect = true;
        Toast.success("已收藏");
      } else {
        this.collect = false;
        Toast.success("已取消收藏");
      }
    },
    onClickChangeShow() {
      this.show = !this.show;
    },
    onBuyClicked() {
      if (getCookie("token") !== "未找到对应cookie") {
        this.$router.push("pay");
        this.show = !this.show; //关闭弹窗
      } else {
        Toast.fail("请先登录");
      }
    }, //跳转到支付页面
    showList(data) {
      data.forEach(e => {
        let sId = e.goodsAttrIds.split(",");
        const id = e.id; // skuId，下单时后端需要
        const price = e.price; // 价格（单位分）
        let s1 = ""; // 规格类目 k_s 为 s1 的对应规格值 id
        let s2 = "";
        const stock_num = e.stock; // 当前 sku 组合对应的库存
        s1 = sId[0];
        s2 = sId[1];
        this.sku.list.push({
          id: id,
          price: price,
          s1: s1,
          s2: s2,
          stock_num: stock_num
        });
      });
    },
    onClickAddToCart(data) {
      const cartData = {
        id: data.goodsId,
        attr: getName(this.idArr, this.valArr, data.selectedSkuComb.s1),
        attrVal: getName(this.idArr, this.valArr, data.selectedSkuComb.s2),
        price: data.selectedSkuComb.price / 100,
        num: data.selectedNum
      };
      if (getCookie("token") !== "未找到对应cookie") {
        addShoppingToCart(cartData, getCookie("token")).then(data => data);
        Toast.success("添加成功");
        this.show = !this.show;
      } else {
        Toast.fail("请先登录");
      }
    }
  },
  created() {
    this.id = this.$route.query.id;
    getAllShoppingData(this.id)
      .then(data => {
        this.shopping = data[0];
        this.goods.picture = getImgRightPath(this.shopping.img);
        this.secondList = this.shopping.secondList;
      })
      .then(() => {
        getShoppingSku(this.id).then(data => {
          this.sku.tree = listToSku(data);
          this.showList(data);
          let tempId = [];
          let tempVal = [];
          data.forEach(e => {
            tempId.push(e.goodsAttrIds.split(","));
            tempVal.push(e.goodsAttrVals.split(","));
          });
          tempId.forEach(e => {
            this.idArr = this.idArr.concat(e);
          });
          tempVal.forEach(e => {
            this.valArr = this.valArr.concat(e);
          });
          this.idArr = deduplication(this.idArr);
          this.valArr = deduplication(this.valArr);
        });
      });
  }
};
</script>

<style scoped lang="scss">
@import "bottomNav";
</style>
