<!--
 * @Author: Hzh
 * @Date: 2020-07-06 13:36:32
 * @LastEditTime: 2020-07-09 13:22:31
 * @LastEditors: Hzh
 * @Description:
-->
<template>
  <div class="frame">
    <div class="single-page">
      <keep-alive :include="keepAlivePage">
        <router-view :key="routerViewKey" />
      </keep-alive>
    </div>
    <!-- <footer-nav /> -->
  </div>
</template>

<script>
// import FooterNav from './components/FooterNav.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',

  components: {
    // FooterNav
  },

  props: {},

  data() {
    return {}
  },

  computed: {
    ...mapGetters(['keepAlivePage']),
    routerViewKey() {
      return this.$route.fullPath
    }
  },

  watch: {},

  created() {},

  mounted() {},

  methods: {}
}
</script>

<style lang="less" scoped>
.frame {
  height: 100%;
  .single-page {
    height: calc(100% - 98px);
  }
}
</style>
