<!--
 * @Author: Hzh
 * @Date: 2020-07-03 15:12:46
 * @LastEditTime: 2020-07-03 15:58:58
 * @LastEditors: Hzh
 * @Description:
-->

<template>
  <div class="page-not-find">
    <div class="box">
      <div class="image">
        <img src="../assets/imgs/public/404.png" alt>
      </div>
      <div class="tips">页面出现了点小问题，请稍后再试！</div>
      <div class="back">
        <van-button type="default">刷新页面</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {}
  },
  mounted() {
    // console.log(this.$route)
  },
  methods: {

  },
  beforeRouteLeave(to, from, next) {
    next()
  }
}
</script>

<style lang="less" scoped>
.page-not-find {
  background: #fff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .box {
    .image {
      width: 500px;
      margin: 0 auto;
      margin-bottom: 20px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .tips {
      text-align: center;
      margin: 0 auto;
      color: @color-xxtitle;
      font-size: 26px;
      margin-bottom: 40px;
    }
    .back {
      display: flex;
      justify-content: center;
      .van-button--normal {
        padding: 0 30px;
        font-size: 28px;
      }
      .van-button {
        height: 88px;
        line-height: 84px;
        border-radius: 4px;
      }
      .van-button--primary {
        margin-left: 40px;
        background-color: var(--color-background-theme);
        border: 1px solid var(--color-background-theme);
      }
    }
  }
}
</style>
