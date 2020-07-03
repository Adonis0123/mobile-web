
<!--
Props：
  参数                说明                    类型              默认值
showOverlay        是否展示提示组件         Boolean              false
loadingText         提示文案                String              加载中...
-->

<template>
  <van-overlay :show="showOverlay">
    <div class="overlay">
      <van-loading :color="themeColor" vertical>{{ loadingText }}</van-loading>
    </div>
  </van-overlay>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    showOverlay: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String,
      default: '加载中...'
    }
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="less" scoped>
.van-overlay {
  z-index: 3;
  background-color: rgba(0, 0, 0, 0);
  .overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 240px;
    height: 240px;
    background-color: rgba(50, 50, 51, 0.88);
    .van-loading {
      text-align: center;
    }
    /deep/ .van-loading__spinner {
      width: 70px;
      height: 70px;
    }
    /deep/ .van-loading--vertical .van-loading__text {
      margin-top: 20px;
      color: @color-xtitle;
      font-size: 30px;
    }
  }
}
</style>
