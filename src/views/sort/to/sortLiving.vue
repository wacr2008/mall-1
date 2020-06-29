<template>
  <div class="sort-listUp">
    <van-collapse v-model="activeNames" accordion>
      <van-collapse-item
        v-for="(name, index) in sportItemName"
        :key="index"
        :title="name"
        :name="index"
      >
        {{ $route.query.uid }}
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import { getSortDataSe } from "../../API/sort_API";

export default {
  name: "listUp",
  data() {
    return {
      sportItemName: [],
      sportItemId: [],
      uid: 0,
      activeNames: 0
    };
  },
  created() {
    this.uid = this.$route.query.uid;
    getSortDataSe(this.uid)
      .then(data => {
        data.forEach(e => {
          this.sportItemName.push(e.secondListName);
          this.sportItemId.push(e.id);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped lang="scss"></style>
