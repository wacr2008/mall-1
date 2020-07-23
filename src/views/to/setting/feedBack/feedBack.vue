<template>
  <div class="feedBack">
    <div class="feedBack-topPart">
      <button class="feedBack-topPart-back" @click="getBack">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-back"></use>
        </svg>
      </button>
      <div class="feedBack-topPart-title">意见反馈</div>
    </div>
    <div class="feedBack-textArea">
      <van-field
        v-model="message"
        rows="4"
        autosize
        type="textarea"
        maxlength="200"
        placeholder="写意见"
        show-word-limit
      />
    </div>
    <div class="feedBack-contactInformation">
      <van-field
        v-model="contact"
        rows="1"
        autosize
        label="联系方式"
        placeholder="请输入手机号/QQ"
      />
    </div>
    <div class="feedBack-commit">
      <van-button type="danger">提交反馈</van-button>
    </div>
  </div>
</template>

<script>
import { getBack } from "../../../../components/utils.js";

export default {
  name: "feedBack",
  data() {
    return {
      message: "",
      contact: ""
    };
  },
  methods: {
    getBack
  }
};
</script>

<style scoped lang="scss">
.feedBack {
  &-topPart {
    width: 100%;
    height: 1rem;
    background-color: #fff;
    display: flex;
    font-size: initial;
    align-items: center;
    position: relative;
    border-bottom: 1px solid #ededed;

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

  .feedBack-textArea,
  .feedBack-contactInformation {
    width: 90%;
    margin: 0.2rem auto 0 auto;
    border: 1px solid #ebebeb;
  }

  &-commit {
    margin: 0.8rem 0;
    width: 100%;
    text-align: center;

    .van-button--normal {
      padding: 0 1rem;
      font-size: initial;
    }
  }
}
</style>
