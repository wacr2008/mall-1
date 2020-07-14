<template>
  <div class="sort-listOnly">
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item
        v-for="(name, index) in sportItemName"
        :key="index"
        :title="name"
        :name="index"
        :is-link="false"
        :icon="require('../../../assets/img/other/pic1.png')"
      >
        <div class="listItem" v-for="(item, index2) in thirdList" :key="index2">
          <div
            class="listItem-line"
            v-if="sportItemId[activeName] === item.pid"
            @click="onClickJumpToShoppingDetail(index2)"
          >
            {{ item.name }}
          </div>
        </div>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import { getSortDataSecond, getSortDataThird } from "../../API/sort_API.js";

export default {
  name: "sortSport",
  data() {
    return {
      sportItemName: [],
      sportItemId: [],
      uid: 0,
      thirdList: [],
      activeName: -1
    };
  },
  created() {
    this.uid = this.$route.query.uid;
    this.getDataSe();
  },
  watch: {
    $route(v) {
      this.uid = v.query.uid;
      this.sportItemName = []; //重置为空，否则会不断添加
      this.sportItemId = []; //重置为空，否则会不断添加
      this.thirdList = []; //重置为空，否则会不断添加
      this.getDataSe();
    }
  },
  methods: {
    getDataSe() {
      getSortDataSecond(this.uid)
        .then(data => {
          if (data !== undefined) {
            data.forEach(e => {
              this.sportItemName.push(e.secondListName);
              this.sportItemId.push(e.id);
            });
            this.getDataThird();
          }
        })
        .catch(() => {});
    }, //获取二级菜单数据
    getDataThird() {
      //获取三级菜单数据
      let i = 0;
      this.sportItemId.forEach(e => {
        getSortDataThird(e).then(data => {
          console.log(data);
          const goods = data.data.goods;
          if (goods) {
            goods.forEach(e => {
              let thirdListItem = {};
              thirdListItem.name = e.goodsName;
              thirdListItem.id = e.id;
              thirdListItem.pid = e.secondList;

              /* 不能将thirdListItem设为返回值，不然数组中所有数据都是一样的 */

              this.thirdList[i] = thirdListItem;
              i++;
            });
          }
        });
      });
    },
    onClickJumpToShoppingDetail(index) {
      this.$router.push({
        path: "/shoppingDetail",
        query: {
          id: this.thirdList[index].id
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import "sortTaT";
</style>
