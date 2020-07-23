<template>
  <div class="waitingPay">
    <div class="waitingPay-topPart">
      <button class="waitingPay-topPart-back" @click="getBackToList">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-back"></use>
        </svg>
      </button>
      <div class="waitingPay-topPart-title">支付方式</div>
    </div>
    <div class="waitingPay-countDown">
      <van-count-down :time="time" format="mm : ss" />
      <div class="waitingPay-countDown-text">
        剩余支付时间
      </div>
    </div>
    <div class="waitingPay-wayToPay">
      <div class="waitingPay-wayToPay-text">
        选择支付方式：
      </div>
      <div class="waitingPay-wayToPay-ways">
        <van-radio-group v-model="radio">
          <van-cell-group>
            <van-cell
              title="支付宝支付"
              clickable
              @click="radio = '1'"
              :icon="imgs[0]"
              checked-color="#DF4D4B"
            >
              <template #right-icon>
                <van-radio name="1" />
              </template>
            </van-cell>
            <van-cell
              title="微信支付"
              clickable
              @click="radio = '2'"
              :icon="imgs[1]"
              checked-color="#DF4D4B"
            >
              <template #right-icon>
                <van-radio name="2" />
              </template>
            </van-cell>
          </van-cell-group>
        </van-radio-group>
      </div>
    </div>
    <div class="waitingPay-payNow">
      <van-button type="danger">立即支付</van-button>
    </div>
  </div>
</template>

<script>

export default {
  name: "waitingPay",
  data() {
    return {
      time: 30 * 60 * 1000,
      radio: "1",
      imgs: [
        require("../../../assets/img/to/waitingPay/any.png"),
        require("../../../assets/img/to/waitingPay/wechat.png")
      ]
    };
  },
  methods: {
    getBackToList() {
      this.$router.push({
        path: "/order",
        query: {
          num: 0
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.waitingPay {
  background-color: #f1f1f1;
  height: 100%;
  position: relative;

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

  &-countDown {
    height: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;

    .van-count-down {
      font-size: x-large;
    }

    &-text {
      margin-top: 0.2rem;
    }
  }

  &-wayToPay {
    &-text {
      margin: 0.3rem 0 0.3rem 0.3rem;
      font-size: initial;
    }
  }

  &-payNow {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    .van-button {
      width: 100%;
    }
  }
}
</style>
