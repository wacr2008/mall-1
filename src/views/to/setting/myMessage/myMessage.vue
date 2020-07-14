<template>
  <div class="myMessage">
    <div class="myMessage-topPart">
      <button class="myMessage-topPart-back" @click="getBack">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-back"></use>
        </svg>
      </button>
      <div class="myMessage-topPart-title">个人信息</div>
    </div>
    <div class="myMessage-headerImg">
      <img :src="headerImg" alt="err" />
    </div>
    <div class="myMessage-otherIFM">
      <van-cell-group>
        <van-cell title="昵称" :value="name" />
        <van-cell
          title="性别"
          :is-link="item.sex.isLink_sex"
          :value="item.sex.sex"
          @click="onClick('sex')"
        />
        <van-cell
          title="年龄"
          :is-link="item.age.isLink_age"
          :value="item.age.age"
          @click="onClick('age')"
        />
      </van-cell-group>
      <div class="div-space"></div>
      <van-cell-group>
        <van-cell title="地址" is-link @click="onClickMyLocation" />
        <van-cell title="实名认证" is-link />
      </van-cell-group>
      <van-overlay :show="item.sex.show_sex">
        <div class="overlay" @click.stop>
          <div class="overlay-sex">
            <van-radio-group
              v-model="item.sex.radio_sex"
              checked-color="#DE3332"
            >
              <div class="sex-radio-title">性别</div>
              <van-cell-group>
                <van-cell
                  title="男"
                  clickable
                  @click="item.sex.radio_sex = '0'"
                >
                  <template #right-icon>
                    <van-radio name="0" />
                  </template>
                </van-cell>
                <van-cell
                  title="女"
                  clickable
                  @click="item.sex.radio_sex = '1'"
                >
                  <template #right-icon>
                    <van-radio name="1" />
                  </template>
                </van-cell>
              </van-cell-group>
              <div class="check-button" @click="onClickCheckSex">
                确定
              </div>
            </van-radio-group>
          </div>
        </div>
      </van-overlay>
      <van-popup
        v-model="item.age.show_age"
        position="bottom"
        :style="{ height: '45%' }"
      >
        <van-picker
          title="出生年份"
          show-toolbar
          :columns="currentDate"
          @confirm="onClickCheckAge"
          @cancel="onClickCancel"
        />
      </van-popup>
    </div>
  </div>
</template>

<script>
import { getBack } from "../../../../components/utils.js";
import { getCookie } from "../../../../components/cookie.js";
import { getMyData, editData } from "../../../API/my_API.js";

export default {
  name: "myMessage",
  data() {
    return {
      token: "",
      headerImg: require("../../../../assets/img/my/topPart/myHeader.png"),
      name: "",
      item: {
        sex: {
          sex: "", //显示的性别，男/女
          isLink_sex: true, //sex行右侧箭头
          show_sex: false, //显示sex选择框内容
          radio_sex: "-1" //radio绑定的选择性别,string类型，否则无法通过name来进行绑定
        },
        age: {
          age: "",
          isLink_age: true,
          show_age: false
        }
      },
      currentDate: [],
      userData: {}
    };
  },
  methods: {
    getBack,
    getCookie,
    judgeIFM() {
      if (!this.userData.userName) {
        this.name = this.userData.phone;
      } else {
        this.name = this.userData.userName;
      }
      if (this.token) {
        this.headerImg = getCookie("headerImg");
      }
    },
    judgeSex() {
      if (this.item.sex.radio_sex === "-1") {
        //本地进行修改后减小服务器压力，不去服务器再获取一次数据，直接调用本地数据
        if (this.userData.sex !== null) {
          this.item.sex.radio_sex = this.userData.sex + ""; //将number转为string
          this.item.sex.isLink_sex = false;
          if (this.userData.sex === 0) this.item.sex.sex = "男";
          else this.item.sex.sex = "女";
        }
      } else {
        this.item.sex.isLink_sex = false;
        if (this.item.sex.radio_sex === "0") this.item.sex.sex = "男";
        else this.item.sex.sex = "女";
      }
    },
    onClick(data) {
      switch (data) {
        case "sex": {
          this.item.sex.show_sex = true;
          break;
        }
        case "age": {
          this.item.age.show_age = true;
          break;
        }
      }
    }, //判断点击展示的弹窗

    onClickCheckSex() {
      this.item.sex.show_sex = false;
      editData({
        sex: parseInt(this.item.sex.radio_sex),
        age: this.item.age.age
      });
    },

    onClickCheckAge(val) {
      this.item.age.show_age = false;
      this.judgeAge(val);
      editData({
        sex: parseInt(this.item.sex.radio_sex),
        age: this.item.age.age
      });
    }, //age点击弹出框的确定按钮

    onClickCancel() {
      this.item.age.show_age = false;
    }, //点击弹出框的取消按钮

    judgeAge(val = "") {
      if (val) {
        //点击确定传值后
        this.item.age.isLink_age = false;
        const date = new Date();
        this.item.age.age = date.getFullYear() - val;
        this.userData.age = this.item.age.age; //直接替换从数据库中拿来的age信息，方便updated
      } else {
        if (this.userData.age) {
          //如果数据库中有年龄信息
          this.item.age.isLink_age = false;
          this.item.age.age = this.userData.age;
        }
      }
    }, //获取年龄

    onClickMyLocation() {
      this.$router.push("/myLocation");
    }
  },
  created() {
    this.token = getCookie("token");
    if (this.token !== "未找到对应cookie" && this.token !== "") {
      getMyData().then(data => {
        this.userData = data;
        this.judgeIFM();
        this.judgeSex();
      });
    }
    const date = new Date();
    for (let i = date.getFullYear(); i > 1900; i--) {
      this.currentDate.push(i);
    }
  },
  updated() {
    this.judgeSex();
    this.judgeAge();
  }
};
</script>

<style scoped lang="scss">
@import "myMessage";
</style>
