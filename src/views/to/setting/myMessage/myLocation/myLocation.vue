<template>
  <div class="myLocation">
    <div class="myLocation-topPart">
      <button class="myLocation-topPart-back" @click="getBackTo">
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
        v-show="show[index] === true"
      >
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
              <div class="edit" @click="onClickChangeLocation(item)">
                编辑
              </div>
              <div class="delete" @click="deletePo(item.id, index)">
                删除
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <van-overlay :show="showOver" @click="showOver = false">
      <div class="wrapper" @click.stop>
        <!--遮罩层-->
        <div class="block">
          <div class="block-title">
            提示
          </div>
          <div class="block-contain">
            确定要删除地址吗？
          </div>
          <div class="block-button">
            <button class="check" @click="onClickDelete">确认</button>
            <button @click="onClickCancel">取消</button>
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import { getMyPosition, deletePosition } from "../../../../API/my_API.js";
import { getCookie } from "../../../../../components/cookie.js";
import Vue from "vue";

export default {
  name: "myLocation",
  data() {
    return {
      num: 0,
      token: "",
      data: {},
      radio: 0,
      show: [], //判断是否被删除
      from: "", //来源，判断从哪个页面来到这个地址页面，方便返回
      showOver: false, //删除确认框是否显示
      idWaitingRemove: "", //待删除时将值存入这两个中
      indexWaitingRemove: "" //待删除时将值存入这两个中
    };
  },
  methods: {
    getBackTo() {
      if (this.from) {
        this.$router.push("/pay");
      } else {
        this.$router.push("/myMessage");
      }
    }, //从from判断页面来源并直接返回，否则修改/添加数据后会返回修改/添加页面

    onClickAddLocation() {
      this.$router.push({
        path: "/addLocation",
        query: {
          fun: "add",
          from: this.from
        }
      });
    }, //添加地址

    onClickChangeLocation(item) {
      this.$router.push({
        path: "/addLocation",
        query: {
          fun: "change",
          data: item,
          from: this.from
        }
      });
    }, //修改地址

    onClickCancel() {
      this.showOver = !this.showOver;
    },

    onClickDelete() {
      const sId = this.idWaitingRemove + ""; //后端接收string类型参数，因此要转为string
      deletePosition(sId, this.token);
      Vue.set(this.show, this.indexWaitingRemove, false); //Vue 无法监听数组内元素的变化
      this.num--;
      this.onClickCancel();
    },

    deletePo(id, index) {
      this.idWaitingRemove = "";
      this.indexWaitingRemove = ""; //将这两个值初始化
      this.onClickCancel();
      this.idWaitingRemove = id;
      this.indexWaitingRemove = index;
    } //删除地址
  },
  created() {
    if (getCookie("token") !== "未找到对应cookie")
      this.token = getCookie("token");
    if (this.$route.query.from) {
      this.from = this.$route.query.from;
    }
    getMyPosition(this.token).then(data => {
      //后端设置数据库内没有值默认返回查询失败...
      if (data.msg === "查询失败") {
        this.num = 0;
      } else {
        this.num = data.count;
        this.data = data.data;
        this.data.forEach(() => {
          this.show.push(true);
        });
      }
    });
  }
};
</script>

<style scoped lang="scss">
@import "myLocation";
</style>
