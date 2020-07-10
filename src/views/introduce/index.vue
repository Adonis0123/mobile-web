<!--
 * @Author: Hzh
 * @Date: 2020-07-09 14:14:14
 * @LastEditTime: 2020-07-10 14:00:35
 * @LastEditors: Hzh
 * @Description:
-->
<template>
  <div class="introduce">
    <van-cell-group title="移动端模板介绍">
      <van-cell
        title="主要功能"
        to="/project-introduction"
        size="large"
        is-link
      />
    </van-cell-group>
    <van-cell-group :border="false" :title="basicComponents.title">
      <van-cell
        v-for="(item,index) in basicComponents.childs"
        :key="index"
        :title="item.name"
        :to="item.path"
        size="large"
        is-link
      />
    </van-cell-group>
  </div>
</template>

<script>
import baseCompDetails from '@/router/modules/baseCompDetails.js'
export default {
  name: 'Introduce',

  components: {},

  mixins: [],

  props: {},

  data() {
    return {
      isHover: false,
      basicComponents: {
        title: '基础组件',
        childs: []
      }
    }
  },

  computed: {},

  watch: {},

  created() {
    baseCompDetails.forEach(item => {
      this.basicComponents.childs.push({
        name: item.meta.title,
        path: item.path
      })
    })
  },

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

    .van-cell__title {
      padding-left: 20px;
      color: #323233;
      font-weight: 500;
      font-size: 28px;
    }
    &:active {
      background: #e4e8ee;
    }
  }
}
</style>
