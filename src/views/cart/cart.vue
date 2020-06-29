<template>
  <div class="cart">
    <header>
      <div class="cart-header-title">购物车 ({{ num }})</div>
      <div class="cart-header-edit">
        编辑
      </div>
    </header>
    <div class="cart-contain">
      <van-checkbox-group v-model="checked" ref="checkboxGroup">
      <div class="cart-item"
           v-for="(x,index) in shopping"
           :key="index"
      >
          <div class="div-space"></div>
          <div class="cart-item-title">
            <van-checkbox :name="index">
              <template #icon="props">
                <div class="cart-item-title-round">
                  <svg class="icon" aria-hidden="true">
                    <use
                      :xlink:href=
                        "props.checked ? activeIcon : inactiveIcon"
                    ></use>
                  </svg>
                  {{ shopping[index].title }}
                </div>
              </template>
            </van-checkbox>
          </div>
          <div class="cart-item-contain">
            <div class="cart-item-contain-round">
              <van-checkbox v-model="checked" :name="index">
                <template #icon="props">
                  <div class="cart-item-contain-round">
                    <svg class="icon" aria-hidden="true">
                      <use
                        :xlink:href=
                          "props.checked ? activeIcon : inactiveIcon"
                      ></use>
                    </svg>
                  </div>
                </template>
              </van-checkbox>
            </div>
            <div class="cart-item-contain-img">
              <img :src="shopping[index].sortImg" alt="err">
            </div>
            <div class="cart-item-contain-detail">
              <div class="cart-item-contain-detail-title">{{shopping[index].sortTitle}}</div>
              <div class="cart-item-contain-detail-size">
                {{shopping[index].sortSize}};{{shopping[index].sortMaterial}}
              </div>
              <div class="cart-item-contain-detail-color">{{shopping[index].color}}</div>
              <div class="cart-item-contain-detail-priceOrNum">
                <div class="cart-item-contain-detail-priceOrNum-price">{{shopping[index].price}}</div>
                <div class="cart-item-contain-detail-priceOrNum-num">x{{shopping[index].num}}</div>
              </div>
            </div>
          </div>
          <div class="cart-item-message" v-if="!shopping[index].message">
            <div class="cart-item-message-box">暂未编辑留言</div>
            <div class="cart-item-message-button">留言</div>
          </div>
          <div class="cart-item-message" v-if="shopping[index].message">
            <div class="cart-item-message-box">{{shopping[index].message}}</div>
            <div class="cart-item-message-button">修改</div>
          </div>
        </div>
      </van-checkbox-group>
    </div>
    <div class="cart-total">
      <van-button type="primary" @click="checkAll">全选</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "cart",
  data() {
    return {
      num: 0,
      checked: [],
      activeIcon: "#icon-yuan",
      inactiveIcon: "#icon-yuancircle46",
      shopping:[
        {
          title: "家居 Design",
          sortImg: require('../../assets/img/cart/flower.png'),
          sortTitle: "木质设计感茶几",
          sortSize: "400*400*560cm",
          sortMaterial: "黑胡桃木",
          color: "黑胡桃色",
          price: "￥ 290",
          num: 1,
          message:'顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶'
        },
        {
          title: "家居 Design",
          sortImg: require('../../assets/img/cart/flower.png'),
          sortTitle: "木质设计感茶几",
          sortSize: "400*400*560cm",
          sortMaterial: "黑胡桃木",
          color: "黑胡桃色",
          price: "￥ 290",
          num: 1,
          message:''
        }
      ]
    };
  },
  methods: {
    checkAll() {
      const childrenLength = this.$refs.checkboxGroup.children.length;
      for(let i = 0; i < childrenLength; i++){
        console.log(this.$refs.checkboxGroup.children[i].$el.ariaChecked)
        if(this.$refs.checkboxGroup.children[i].$el.ariaChecked === 'false'){
          this.$refs.checkboxGroup.toggleAll(true);
          break;
        }
        else if(i === (childrenLength-1)){     //如果到最后仍没有跳出循环则已为全选
          this.$refs.checkboxGroup.toggleAll();
        }
      }
    }  //  全选，如果已全选则全部取消全选
  }
};
</script>

<style scoped lang="scss">
@import "cart";
</style>
