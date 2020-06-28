<template>
  <div class="sort-sport">
    <div
      class="sort-sport-item"
      v-for="(itemName, index) in sportItemName"
      :key="index"
    >
      <div class="sort-sport-item-text">
        {{ itemName }}
      </div>
      <div class="sort-sport-item-img">
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
  beforeMount() {
    getSortDataSe(this.uid).then(data => {
      data.forEach(e => {
        this.sportItemName.push(e.secondListName);
        this.sportItemId.push(e.id);
      });
      this.uid = this.$route.query.uid;
    });
  }
};
</script>

<style scoped lang="scss">
.sort-sport {
  &-item {
    height: 2rem;
    margin: 0.2rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    background-color: #F1F1F1;

    &-text {
      margin-left: 1rem;
    }

    &-img {
      height:1.5rem;
      width: 1.5rem;
      margin: 0 0.5rem 0 auto;

      img{
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>
