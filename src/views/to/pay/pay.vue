<template>
  <div class="pay"></div>
</template>

<script>
import { getCookie } from "../../../components/cookie.js";
import { payByZFB } from "../../API/pay_API.js";
import { parseToNode } from "../../../components/utils";

export default {
  name: "pay",
  data() {
    return {};
  },
  created() {
    if (getCookie("token") !== "未找到对应的cookie") {
      payByZFB(getCookie("token")).then(data => {
        const node = document.querySelector(".pay");
        node.innerHTML = data;
        node.appendChild(parseToNode(data)[0]);
      });
    }
  }
};
</script>

<style scoped lang="scss">
.pay {
  height: 100%;

  form {
    height: 5rem;
    width: 100%;
  }
}
</style>
