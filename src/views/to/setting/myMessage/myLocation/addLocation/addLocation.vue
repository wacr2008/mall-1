<template>
  <div class="addLocation">
    <div class="addLocation-topPart">
      <button class="addLocation-topPart-back" @click="getBack">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-back"></use>
        </svg>
      </button>
      <div class="addLocation-topPart-title">{{ state }}收货地址</div>
      <div
        class="addLocation-topPart-finish"
        @click="onClickFinish"
        v-if="state === '新建'"
      >
        保存
      </div>
      <div
        class="addLocation-topPart-finish"
        @click="onClickFinish"
        v-if="state === '修改'"
      >
        修改
      </div>
    </div>
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
import { addPosition, changePosition } from "../../../../../API/my_API.js";
import { Toast } from "vant";

export default {
  name: "addLocation",
  data() {
    return {
      state: "新建",
      name: "", //用户姓名
      tel: "", //联系电话
      positionDetail: "", //详细地址
      radio: false, //是否位默认地址
      token: "",
      positionShow: false, //省市区选择器是否显示
      isLink: true, //地址选择右侧箭头是否显示
      areaList, //导入的省市区列表
      area: {}, //用户选择的地址
      positionAll: "", //用户选择后显示的地址
      id: "", //修改页面需要传入id
      from: "" //上个页面传进来的值，过渡作用
    };
  },
  methods: {
    getBack,
    onClickShow() {
      this.positionShow = true;
    },
    onClickConfirm(val) {
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
    }, //页面显示的地址信息

    toggleIt() {
      this.radio = !this.radio;
    },
    onClickFinish() {
      if (
        this.name !== "" &&
        this.tel !== "" &&
        this.area !== "" &&
        this.positionDetail !== ""
      ) {
        //值都不为空则传入，否则提示
        const data = {
          name: this.name,
          phone: this.tel,
          province: parseInt(this.area[0].code.substring(0, 2)),
          city: parseInt(this.area[1].code.substring(0, 4)),
          area: parseInt(this.area[2].code),
          positionDetail: this.positionDetail
        };
        if (this.state === "新建") {
          //判断状态为新建还是修改
          addPosition(data, this.token).then(() => {
            Toast.success("添加成功");
            this.$router.push({
              path: "/myLocation",
              query: {
                from: this.from
              }
            });
          });
        } else {
          changePosition(data, this.token).then(() => {
            Toast.success("修改成功");
            this.$router.push({
              path: "/myLocation",
              query: {
                from: this.from
              }
            });
          });
        }
      } else {
        Toast.fail("请填写全部信息");
      }
    }
  },
  created() {
    if (getCookie("token") !== "未找到对应cookie")
      this.token = getCookie("token");
    if (this.$route.query.fun === "change") {
      this.state = "修改";
      const data = this.$route.query.data;
      this.name = data.userName;
      this.tel = data.phone;
      this.positionDetail = data.detailed;
      this.id = data.id;
    } //如果传入值为change，则将data值传入本地数据中
    if (this.$route.query.from) {
      this.from = this.$route.query.data.from;
    }
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

  &-contain {
    margin-top: 0.25rem;
  }
}

/deep/ .van-field__control {
  text-align: right;
}
</style>
