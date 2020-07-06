<!--
 * @Author: Hzh
 * @Date: 2020-07-06 16:39:54
 * @LastEditTime: 2020-07-06 17:59:48
 * @LastEditors: Hzh
 * @Description:
-->
<template>
  <div class="card">
    <div class="card-left">{{ item.state }}</div>
    <div class="card-right">
      <div class="card-right-top">{{ item.name }}</div>
      <div v-if="item.inspectionReport" class="card-right-middle">检验报告：{{ item.inspectionReport }}</div>
      <div v-if="item.testReport" class="card-right-middle">检查报告：{{ item.testReport }}</div>
      <div class="card-right-bottom">
        <div class="date">{{ item.date }}</div>
        <div
          class="confirmation"
          :class="[item.confirmation === '已确定'?'is-confirm':'no-confirm']"
        >{{ item.confirmation }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',

  components: {},

  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {}
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  methods: {}
}
</script>

<style lang="less" scoped>
.card {
  width: 702px;
  height: 145px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
  margin: 0 auto;
  position: relative;
  top: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  box-sizing: border-box;
  &-left {
    width: 44px;
    height: 44px;
    line-height: 44px;
    border: 1px solid rgba(241, 79, 74, 1);
    border-radius: 50%;
    font-size: 24px;
    color: rgba(241, 79, 74, 1);
    text-align: center;
    margin-right: 20px;
  }
  &-right {
    width: calc(100% - 60px - 20px);
    &-top {
      font-size: 32px;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
    }
    &-middle {
      color: rgba(241, 79, 74, 1);
      font-size: 24px;
    }
    &-bottom {
      display: flex;
      justify-content: space-between;
      font-size: 24px;
      color: rgba(34, 34, 34, 1);
      .is-confirm{
        color: rgba(153,153,153,1);
      }
      .no-confirm{
         color: var(--color-background-theme);
      }
    }
  }
}
</style>
