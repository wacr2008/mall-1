<template>
  <div class="bottom-nav">
    <van-goods-action>
      <van-goods-action-icon
        :click="func[index]"
        v-for="(textContent, index) in text"
        :key="index"
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
      <van-goods-action-button
        text="加入购物车"
        @click="onClickAddCart"
        class="addToCart"
      />
      <van-goods-action-button
        type="danger"
        text="立即购买"
        @click="onClickBuyNow"
      />
      <van-sku v-model="show" :sku="sku" :goods="goods"/>
    </van-goods-action>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      name: "bottomNav",
      text: ["客服", "收藏", "购物车"],
      func: ["onClickCustomer", "onClickCollect", "onClickCart"],
      defaultIcon: ["#icon-kefu", "#icon-soucang", "#icon-gouwuche"],
      sku: {
        tree: [
          {
            k: "尺寸",
            v: [
              {
                id: "30349", // skuValueId：规格值 id
                name: "150*40*45cm" // skuValueName：规格值名称
              },
              {
                id: "1215",
                name: "150*40*65cm"
              }
            ],
            k_s: "s1"
            // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，
            // value 值会是从属于当前类目的一个规格值 id
          },
          {
            k: "材质",
            v: [
              {
                id: "1111",
                name: "白橡木"
              }
            ],
            k_s: "s2"
          },
          {
            k: "颜色",
            v: [
              {
                id: "777",
                name: "胡桃色"
              },
              {
                id: "778",
                name: "原木色"
              }
            ],
            k_s: "s3"
          }
        ],
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 630000, // 价格（单位分）
            s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1111",
            s3: "777",
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: 1000,
            price: 625000,
            s1: "30349",
            s2: "1111",
            s3: "777",
            stock_num: 100
          },
          {
            id: 2260,
            price: 630000,
            s1: "1215",
            s2: "1111",
            s3: "778",
            stock_num: 115
          },
          {
            id: 1100,
            price: 625000,
            s1: "30349",
            s2: "1111",
            s3: "778",
            stock_num: 120
          }
        ]
      },
      goods: {
        // 默认商品 sku 缩略图
        picture: require("../../../../assets/img/to/shoppingDetail/topImg1.png")
      }
    };
  },
  methods: {
    onClickCustomer() {
      this.$router.push("/customerServe");
    },
    onClickCollect() {},
    onClickCart() {
      this.$router.push("/shoppingCart");
    },
    onClickAddCart() {},
    onClickBuyNow() {
      this.show = !this.show;
    }
  }
};
</script>

<style scoped lang="scss">
@import "bottomNav";
</style>
