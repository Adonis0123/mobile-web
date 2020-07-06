<!--
 * @Author: Hzh
 * @Date: 2020-07-06 16:03:13
 * @LastEditTime: 2020-07-06 18:19:34
 * @LastEditors: Hzh
 * @Description:
-->
<template>
  <div class="message">
    <div class="main">
      <card v-for="(item,index) in patientInfo" :key="index" :item="item" />
    </div>
  </div>
</template>

<script>
import card from './components/card.vue'
export default {
  name: 'Message',

  components: { card },

  mixins: [],

  props: {},

  data() {
    return {
      patientInfo: [
        {
          state: '危',
          name: '张晓光',
          inspectionReport: '血常规（五分类）', // 检验报告
          date: '2018.08.15 10:02',
          confirmation: '未确定'
        },
        {
          state: '危',
          name: '李慧慧',
          testReport: 'US 超声检查报告单', // 检查报告
          date: '2018.08.15 10:05',
          confirmation: '已确定'
        }
      ]
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
  .message{
    height: 100%;
    .main{
     height: 100%;
     .ios-fast()
    }
  }
</style>
