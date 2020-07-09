<!--
 * @Author: Hzh
 * @Date: 2020-07-09 14:14:14
 * @LastEditTime: 2020-07-09 14:58:27
 * @LastEditors: Hzh
 * @Description:
-->
<template>
  <div class="introduce">
    <van-cell-group :border="false" :title="basicComponents.title">
      <van-cell
        v-for="(item,index) in basicComponents.childs"
        :key="index"
        :title="item"
        size="large"
        is-link
      />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'Introduce',

  components: {},

  mixins: [],

  props: {},

  data() {
    return {
      basicComponents: {
        title: '基础组件',
        childs: [
          'IconSvg 组件',
          'Loading 等待加载组件',
          'RequestFail 重新加载组件',
          'Scroll betterScroll组件'
        ]
      }
    }
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {}
}
</script>

<style lang="less" scoped>
.introduce {
  .van-cell-group__title {
    padding: 2.133vw 2.133vw 2.067vw;
    line-height: 35px;
    font-size: 28px;
  }
  .van-cell {
    padding-top: 3.2vw;
    padding-bottom: 3.2vw;
    background: #f7f8fa;
    border-radius: 99px;
    transition: background 0.3s;
    margin-bottom: 30px;
    &:active {
      background: #e4e8ee;
    }
    &:hover {
      background: #eef0f4;
    }
  }
}
</style>
