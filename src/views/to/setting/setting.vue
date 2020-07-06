<template>
  <div class="setting">
    <div class="setting-topPart">
      <button class="setting-topPart-back" @click="getBack">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-back"></use>
        </svg>
      </button>
      <div class="setting-topPart-title">设置</div>
    </div>
    <router-view />
  </div>
</template>

<script>
import { getBack } from "../../../components/utils.js";

export default {
  name: "setting",
  methods: {
    getBack
  }
};
</script>

<style scoped lang="scss">
.setting {
  height: 100%;
  background-color: #f1f1f1;

  .setting-topPart {
    width: 100%;
    height: 1rem;
    background-color: #fff;
    display: flex;
    font-size: initial;
    align-items: center;
    position: relative;

    &-back {
      position: absolute;
      height: 0.5rem;
      width: 0.5rem;
      margin-left: 0.2rem;
    }

    &-title {
      margin: auto;
    }
  }
}
</style>
