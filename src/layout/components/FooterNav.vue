<!--
 * @Author: Hzh
 * @Date: 2020-07-03 15:54:19
 * @LastEditTime: 2020-07-06 18:22:21
 * @LastEditors: Hzh
 * @Description:
-->
<!--  -->
<template>
  <van-tabbar v-model="active" fixed route :active-color="themeColor">
    <van-tabbar-item v-for="(item,index) in tabbars" :key="index" :to="item.url">
      <template #icon="props">
        <icon-svg class="icon" :icon-class="props.active?item.actIcon:item.inActIcon" />
      </template>
      <span>{{ item.name }}</span>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'FooterNav',

  components: {},

  props: {},

  data() {
    return {
      active: 0,
      tabbars: [
        {
          name: '门诊',
          actIcon: 'shoujiduan-xuanze-menzhen1',
          inActIcon: 'shoujiduan-xuanze-menzhen1-copy',
          url: '/outpatient'
        },
        {
          name: '住院',
          actIcon: 'shoujiduan-xuanze-zhuyuan',
          inActIcon: 'shoujiduan-xuanze-zhuyuan-copy',
          url: '/inpatients'
        },
        {
          name: '消息',
          actIcon: 'shoujiduan-xuanze-kuaisufangwen',
          inActIcon: 'shoujiduan-xiaoxi-copy',
          url: '/message'
        },
        {
          name: '我的',
          actIcon: 'shoujiduan-xuanze-wode',
          inActIcon: 'shoujiduan-xuanze-wode-copy',
          url: '/mine'
        }
      ]
    }
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  methods: {}
}
</script>

<style lang="less" scoped>
.van-tabbar {
  height: 98px;

  ::v-deep .van-tabbar-item__icon {
    margin-bottom: 10px;
  }
  ::v-deep .van-tabbar-item__text {
    font-size: 22px;
  }
  .icon {
    width: 42px;
    height: 42px;
  }
}
</style>
