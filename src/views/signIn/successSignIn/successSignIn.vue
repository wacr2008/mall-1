<template>
  <div class="successSignIn">
    <div class="successSignIn-headerImg">
      <img
        :src="require('../../../assets/img/signIn/defaultHeader.png')"
        alt="err"
      />
    </div>
    <div class="successSignIn-welcome">
      欢迎登录
    </div>
    <div class="successSignIn-bottomLogo">
      <img
        :src="require('../../../assets/img/signIn/bottomLogo.png')"
        alt="err"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "successSignIn",
  data() {
    return {
      userImg: ""
    };
  }
};
</script>

<style scoped lang="scss">
.successSignIn {
  &-headerImg {
    height: 2rem;
    width: 2rem;
    margin: 4rem auto 0 auto;

    img {
      height: 100%;
      width: 100%;
    }
  }

  &-welcome {
    margin: 0.5rem 0;
    font-size: initial;
    text-align: center;
  }

  &-bottomLogo {
    width: 30%;
    margin: 5rem auto 0.5rem auto;

    img {
      width: 100%;
      object-fit: contain;
    }
  }
}
</style>
