<template>
  <div class="parameter">
    <van-tabs v-model="active" :sticky="true">
      <van-tab title="商品详情">
        <div class="parameter-img">
          <div class="parameter-img-item" v-for="img in detailImg" :key="img">
            <img :src="img" alt="err" v-lazy="img" />
          </div>
        </div>
      </van-tab>
      <van-tab title="商品参数">
        <div class="shopping-parameter">
          <div
            class="shopping-parameter-item"
            v-for="(category, index) in detailParameter.Category"
            :key="index"
          >
            <div class="category">
              {{ category }}
            </div>
            <div class="contain">
              {{ detailParameter.contain[index] }}
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "parameter",
      active: 0,
      detailImg: [
        require("../../../../assets/img/to/shoppingDetail/detail1.png"),
        require("../../../../assets/img/to/shoppingDetail/detail2.png"),
        require("../../../../assets/img/to/shoppingDetail/detail3.png"),
        require("../../../../assets/img/to/shoppingDetail/detail4.png"),
        require("../../../../assets/img/to/shoppingDetail/detail5.png")
      ],
      detailParameter: {
        Category: [
          "商品风格",
          "主要材料",
          "产地",
          "油漆工艺",
          "商品毛重",
          "组装情况"
        ],
        contain: ["现代", "白橡木", "江苏徐州", "环保漆", "30kg", "组装"]
      }
    };
  }
};
</script>

<style scoped lang="scss">
@import "parameter";
</style>
