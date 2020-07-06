<!--
 * @Author: Nahco.Huang
 * @Date: 2020-07-06 14:58:47
 * @LastEditTime: 2020-07-06 15:13:32
 * @LastEditors: Nahco.Huang
-->

<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>

export default {
  data() {
    return {}
  },
  computed: {

  },
  watch: {},
  mounted() {},
  methods: {}
}
</script>

<style lang="less">
#app {
  height: 100vh;
  user-select: none; // 禁止用户长按选择文本
  overflow: hidden;
}
</style>
