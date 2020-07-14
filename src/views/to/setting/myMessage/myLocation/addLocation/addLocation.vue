<template>
  <div class="addLocation">
    <div class="addLocation-topPart">
      <button class="addLocation-topPart-back" @click="getBack">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-back"></use>
        </svg>
      </button>
      <div class="addLocation-topPart-title">新建收货地址</div>
      <div class="addLocation-topPart-finish" @click="onClickFinish">
        保存
      </div>
    </div>
    <div class="div-space"></div>
    <div class="addLocation-contain">
      <van-field v-model="name" label="收货人" placeholder="姓名" />
      <van-field
        v-model="tel"
        type="tel"
        label="手机号"
        placeholder="请输入11位手机号"
      />
      <van-cell
        title="地址"
        :is-link="isLink"
        @click="onClickShow"
        v-model="positionAll"
      />
      <van-field
        v-model="positionDetail"
        label="详细地址"
        placeholder="街道及门牌号"
      />
      <van-cell clickable title="是否设为默认地址" @click="toggleIt">
        <template #right-icon>
          <van-checkbox v-model="radio" />
        </template>
      </van-cell>
    </div>
    <van-popup
      v-model="positionShow"
      position="bottom"
      :style="{ height: '40%' }"
      round
    >
      <van-area
        title="地址"
        :area-list="areaList"
        :columns-placeholder="['请选择省', '请选择市', '请选择区/县']"
        @confirm="onClickConfirm"
        @cancel="onClickCancel"
      />
    </van-popup>
  </div>
</template>

<script>
import { getBack } from "../../../../../../components/utils.js";
import areaList from "../../../../../../assets/position/areaList.js";
import { getCookie } from "../../../../../../components/cookie.js";
import { addPosition } from "../../../../../API/my_API.js";

export default {
  name: "addLocation",
  data() {
    return {
      name: "", //用户姓名
      tel: "", //联系电话
      positionDetail: "", //详细地址
      radio: false, //是否位默认地址
      token: "",
      positionShow: false, //省市区选择器是否显示
      isLink: true, //地址选择右侧箭头是否显示
      areaList, //导入的省市区列表
      area: {}, //用户选择的地址
      positionAll: "" //用户选择后显示的地址
    };
  },
  methods: {
    getBack,
    onClickShow() {
      this.positionShow = true;
    },
    onClickConfirm(val) {
      console.log(val);
      this.area = val;
      this.positionShow = false;
    },
    onClickCancel() {
      this.positionShow = false;
    },
    showPositionPCA() {
      const keys = Object.keys(this.area);
      if (keys.length) {
        this.positionAll =
          this.area[0].name + this.area[1].name + this.area[2].name;
        this.isLink = false;
      }
    },
    toggleIt() {
      this.radio = !this.radio;
    },
    onClickFinish() {
      const data = {
        name: this.name,
        phone: this.tel,
        province: parseInt(this.area[0].code.substring(0, 2)),
        city: parseInt(this.area[1].code.substring(0, 4)),
        area: parseInt(this.area[2].code),
        positionDetail: this.positionDetail
      };
      console.log(data);
      addPosition(data, this.token);
      // this.$router.push("/myLocation");
    }
  },
  created() {
    if (getCookie("token") !== "未找到对应cookie")
      this.token = getCookie("token");
  },
  updated() {
    this.showPositionPCA();
  }
};
</script>

<style scoped lang="scss">
.addLocation {
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

    &-finish {
      position: absolute;
      width: 0.8rem;
      right: 0;
    }
  }
}

/deep/ .van-field__control {
  text-align: right;
}
</style>
