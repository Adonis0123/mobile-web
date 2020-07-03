<!--

使用方法
Props
    参数          说明                类型              默认值
  content           提示文本              String                ''

  showLoading       是否显示加载中        Boolean               false

  使用说明
  showLoad //展示加载组件
  <request-fail :showLoading="showLoading" v-if="showLoad" @click.native="requestAgain" />
  <xxx v-else>

    data(){
      return{
      showLoad: true, // 展示加载组件
      showLoading: true //显示加载中
      }
    }

  methods:{
    requestAgain(){
      this.showLoading = true
      xxxx //再次请求数据
    }
  }
  自己定义变量控制此组件是否显示，数据请求成功的话把showLoad设置为false,失败的话则把showLoad设置为true
  并把showLoading设置为false
-->
<template>
  <div class="request-fail">
    <span v-if="!showLoading">{{ content }}</span>
    <van-loading v-else :color="themeColor">请求中</van-loading>
  </div>
</template>

<script>
export default {
  name: 'RequestFail',

  props: {
    content: {
      // 提示文本
      type: String,
      default: '请求失败，点击重新加载！'
    },
    showLoading: {
      // 展示请求中
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
.request-fail {
  box-sizing: border-box;
  width: 100%;
  min-height: 100px;
  background-color: @color-background;
  font-size: 32px;
  color: var(--color-background-theme);
  text-align: center;
  line-height: 100px;
  .click-effect();
  .van-loading__text {
    margin-left: 16px;
    font-size: 28px;
    vertical-align: middle;
  }
}
</style>
