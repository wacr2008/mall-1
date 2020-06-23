<template>
  <div class="shopping-detail">
    <topPart />
    <evaluation />
    <parameter />
    <bottom-nav />
  </div>
</template>

<script>
import topPart from "./topPart/topPart";
import bottomNav from "./bottomNav/bottomNav";
import evaluation from "./evaluation/evaluation";
import parameter from "./parameter/parameter";

export default {
  components: { topPart, bottomNav, evaluation, parameter },
  data() {
    return {
      name: "shoppingDetail"
    };
  }
};
</script>

<style scoped lang="scss">
.shopping-detail {
  height: calc(100% - 50px);
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
