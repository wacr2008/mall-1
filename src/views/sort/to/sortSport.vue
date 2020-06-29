<template>
  <div class="sort-listOnly">
    <div
      class="sort-listOnly-item"
      v-for="(itemName, index) in sportItemName"
      :key="index"
    >
      <div class="sort-listOnly-item-text">
        {{ itemName }}
      </div>
      <div class="sort-listOnly-item-img">
        <img src="../../../assets/img/other/sortFirst.jpg" alt="err" />
      </div>
    </div>
  </div>
</template>

<script>
import { getSortDataSe } from "../../API/sort_API.js";

export default {
  name: "sortSport",
  data() {
    return {
      sportItemName: [],
      sportItemId: [],
      uid: 0
    };
  },
  created() {
    this.uid = this.$route.query.uid;
    console.log(this.uid);
    getSortDataSe(this.uid).then(data => {
      data.forEach(e => {
        this.sportItemName.push(e.secondListName);
        this.sportItemId.push(e.id);
      });
    });
  }
};
</script>

<style scoped lang="scss">
.sort-listOnly {
  &-item {
    height: 2rem;
    margin: 0.2rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    background-color: #f1f1f1;

    &-text {
      margin-left: 1rem;
    }

    &-img {
      height: 1.5rem;
      width: 1.5rem;
      margin: 0 0.5rem 0 auto;

      img {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>
