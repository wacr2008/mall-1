<template>
  <div class="shoppingSort">
    <div class="shoppingSort-title van-hairline--bottom">
      <div class="shoppingSort-title-img">
        <img :src="title[0]" alt="err" />
      </div>
      <div class="shoppingSort-title-text">{{ title[1] }}</div>
      <van-button type="default" class="shoppingSort-title-btn">全部 ></van-button>
    </div>
    <div class="shoppingSort-contain">
      <div
        class="shoppingSort-contain-item"
        v-for="(title, indexOut) in itemName"
        :key="indexOut"
      >
        <div class="shoppingSort-contain-item-poster">
          <div class="shoppingSort-contain-item-poster-title">{{ title }}</div>
          <div class="shoppingSort-contain-item-poster-img">
            <img :src="itemDetail[indexOut][0]" alt="err">
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
      name: "shopping_sort",
      title: [
        require("../../../assets/img/home/shoppingSort/shoppingSort.png"),
        "商品分类"
      ],
      itemName: [
        "客厅",
        "餐厅",
        "卧室",
        "书房",
        "灯饰照明",
        "家装软居",
        "家居饰品",
        "其他"
      ],
      itemShoppingName: [
        "三抽屉欧式电视柜",
        "三抽屉欧式电视柜",
        "欧式白色大理石茶几",
        "布艺沙发欧式",
        "欧式多格抽屉电视柜"
      ],
      itemDetail: [
        [
          require("../../../assets/img/home/shoppingSort/livingRoom/livingRoom.png"),
          require("../../../assets/img/home/shoppingSort/livingRoom/livingRoom1.png"),
          require("../../../assets/img/home/shoppingSort/livingRoom/livingRoom2.png"),
          require("../../../assets/img/home/shoppingSort/livingRoom/livingRoom3.png"),
          require("../../../assets/img/home/shoppingSort/livingRoom/livingRoom4.png")
        ],
        [
          require("../../../assets/img/home/shoppingSort/restaurant/restaurant.png"),
          require("../../../assets/img/home/shoppingSort/restaurant/restaurant1.png"),
          require("../../../assets/img/home/shoppingSort/restaurant/restaurant2.png"),
          require("../../../assets/img/home/shoppingSort/restaurant/restaurant3.png"),
          require("../../../assets/img/home/shoppingSort/restaurant/restaurant4.png")
        ],
        [
          require("../../../assets/img/home/shoppingSort/bedroom/bedroom.png"),
          require("../../../assets/img/home/shoppingSort/bedroom/bedroom1.png"),
          require("../../../assets/img/home/shoppingSort/bedroom/bedroom2.png"),
          require("../../../assets/img/home/shoppingSort/bedroom/bedroom3.png"),
          require("../../../assets/img/home/shoppingSort/bedroom/bedroom4.png")
        ],
        [
          require("../../../assets/img/home/shoppingSort/study/study.png"),
          require("../../../assets/img/home/shoppingSort/study/study1.png"),
          require("../../../assets/img/home/shoppingSort/study/study2.png"),
          require("../../../assets/img/home/shoppingSort/study/study3.png"),
          require("../../../assets/img/home/shoppingSort/study/study4.png")
        ],
        [
          require("../../../assets/img/home/shoppingSort/lighting/lighting.png"),
          require("../../../assets/img/home/shoppingSort/lighting/lighting1.png"),
          require("../../../assets/img/home/shoppingSort/lighting/lighting2.png"),
          require("../../../assets/img/home/shoppingSort/lighting/lighting3.png"),
          require("../../../assets/img/home/shoppingSort/lighting/lighting4.png")
        ],
        [
          require("../../../assets/img/home/shoppingSort/furnishing/farnishing.png"),
          require("../../../assets/img/home/shoppingSort/furnishing/farnishing1.png"),
          require("../../../assets/img/home/shoppingSort/furnishing/farnishing2.png"),
          require("../../../assets/img/home/shoppingSort/furnishing/farnishing3.png"),
          require("../../../assets/img/home/shoppingSort/furnishing/farnishing4.png")
        ],
        [
          require("../../../assets/img/home/shoppingSort/accessories/accessories.png"),
          require("../../../assets/img/home/shoppingSort/accessories/accessories1.png"),
          require("../../../assets/img/home/shoppingSort/accessories/accessories2.png"),
          require("../../../assets/img/home/shoppingSort/accessories/accessories3.png"),
          require("../../../assets/img/home/shoppingSort/accessories/accessories4.png")
        ],
        [
          require("../../../assets/img/home/shoppingSort/other/other.png"),
          require("../../../assets/img/home/shoppingSort/other/other1.png"),
          require("../../../assets/img/home/shoppingSort/other/other2.png"),
          require("../../../assets/img/home/shoppingSort/other/other3.png"),
          require("../../../assets/img/home/shoppingSort/other/other4.png")
        ]
      ]
    };
  }
};
</script>

<style scoped>
@import "shopping_sort.scss";
</style>
