<template>
  <div class="myLocation">
    <div class="myLocation-topPart">
      <button class="myLocation-topPart-back" @click="getBack">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-back"></use>
        </svg>
      </button>
      <div class="myLocation-topPart-title">地址</div>
      <div class="myLocation-topPart-add" @click="onClickAddLocation">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jia"></use>
        </svg>
      </div>
    </div>
    <div class="myLocation-noPosition" v-if="num === 0">
      <div class="myLocation-noPosition-img">
        <img
          :src="require('../../../../../assets/img/my/myLocation/location.png')"
          alt="err"
        />
      </div>
      <div class="myLocation-noPositon-text">
        <span>您还未添加常用地址<br />点击右上角'+'按钮，添加常用地址</span>
      </div>
    </div>
    <div class="myLocation-position">
      <div
        class="myLocation-position-item"
        v-for="(item, index) in data"
        :key="index"
      >
        <div class="div-space"></div>
        <div class="myLocation-position-item-body">
          <div class="myLocation-position-item-body-firstLine">
            <span class="myLocation-position-item-body-firstLine-name">
              {{ item.userName }}
            </span>
            <span class="myLocation-position-item-body-firstLine-phone">
              {{ item.phone }}
            </span>
          </div>
          <div class="myLocation-position-item-body-secondLine">
            <span
              class="myLocation-position-item-body-secondLine-position"
              v-if="item.proName !== item.cityName"
            >
              详细地址：{{ item.proName }}{{ item.cityName }}{{ item.areaName }}{{ item.detailed }}
            </span>
            <span
              class="myLocation-position-item-body-secondLine-position"
              v-if="item.proName === item.cityName"
            >
              详细地址：{{ item.proName }}{{ item.areaName }}{{ item.detailed }}
            </span>
          </div>
          <div class="myLocation-position-item-body-thirdLine">
            <van-radio-group v-model="radio">
              <van-radio :name="index">默认收货地址</van-radio>
            </van-radio-group>
            <div class="editAndDelete">
              <div class="edit">
                编辑
              </div>
              <div class="delete">
                删除
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getBack } from "../../../../../components/utils.js";
import { getMyPosition } from "../../../../API/my_API.js";
import { getCookie } from "../../../../../components/cookie.js";

export default {
  name: "myLocation",
  data() {
    return {
      num: 0,
      token: "",
      data: {},
      radio: 0
    };
  },
  methods: {
    getBack,
    onClickAddLocation() {
      this.$router.push("/addLocation");
    }
  },
  created() {
    if (getCookie("token") !== "未找到对应cookie")
      this.token = getCookie("token");
    getMyPosition(this.token).then(data => {
      console.log(data);
      this.num = data.count;
      this.data = data.data;
    });
  }
};
</script>

<style scoped lang="scss">
.myLocation {
  background-color: #f1f1f1;
  height: 100%;

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

    &-add {
      position: absolute;
      width: 0.3rem;
      right: 0;
      margin-right: 0.3rem;

      svg {
        width: 100%;
        object-fit: contain;
      }
    }
  }

  &-noPosition {
    height: 3rem;
    text-align: center;
    margin-top: 2rem;

    &-img {
      height: 100%;

      img {
        height: 100%;
        object-fit: contain;
      }
    }

    &-text {
      color: #9c9c9c;
      font-size: initial;
      margin-top: 0.5rem;
    }
  }

  &-position {
    &-item {
      background-color: #fff;

      &-body {
        height: 1.9rem;

        &-thirdLine {
          display: flex;

          .editAndDelete {
            margin-left: auto;
            display: flex;

            .edit,
            .delete {
              margin-right: 0.1rem;
            }
          }
        }
        &-thirdLine,
        &-firstLine {
          margin: 0.2rem 0 0.2rem 0.2rem;
          height: 0.4rem;
        }

        &-firstLine {
          &-phone {
            margin-left: 0.5rem;
          }
        }

        &-secondLine {
          margin: 0.2rem 0 0.2rem 0.2rem;
          height: 0.6rem;
        }
      }
    }
  }
}
</style>
