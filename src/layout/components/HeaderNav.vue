<!--
 * @Author: Nahco.Huang
 * @Date: 2020-07-06 13:48:12
 * @LastEditTime: 2020-07-10 15:05:36
 * @LastEditors: Hzh
-->

<template>
  <div class="header-nav">
    <van-nav-bar :title="title" left-arrow @click-left="onClickBack" />
  </div>
</template>

<script>
export default {
  name: 'HeaderNav',

  components: {},

  mixins: [],

  props: {
    title: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
    }
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {
    /**
     * @description: 处理导航栏左部返回按钮点击事件
     */
    onClickBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.header-nav {
  width: 100%;
  height: 90px;
  background-color: #f9f9f9;
  .van-nav-bar {
    width: 100%;
    height: 100%;
    line-height: 90px;
    /deep/.van-nav-bar__title {
      font-weight: 500;
      font-size: 34px;
    }
    /deep/ .van-nav-bar__arrow {
      color: #898989;
      font-size: 48px;
    }
  }
}
</style>
