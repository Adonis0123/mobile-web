<!--
 * @Author: Hzh
 * @Date: 2020-07-03 15:12:45
 * @LastEditTime: 2020-07-03 16:29:49
 * @LastEditors: Hzh
 * @Description:
-->

<template>
  <div id="app">
    <keep-alive :include="keepAlivePage">
      <router-view :key="routerViewKey" />
    </keep-alive>
    <router-view name="footer-bar" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
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
  mounted() {
    this.fixIosBug()
    this.setThemeColor()
  },
  methods: {
    /* 设置主题颜色 */
    setThemeColor() {
      this.$store
        .dispatch('settings/getColor')
        .then(
          document.body.style.setProperty(
            '--color-background-theme',
            this.themeColor
          )
        )
        .catch(err => {
          console.log(err)
        })
    },

    /**
     * @description:解决ios底部导航的bug
     */
    fixIosBug() {
      const u = navigator.userAgent
      const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
      if (isiOS) {
        window.history.pushState({}, 'title', '#')
      }
    }
  }
}
</script>

<style lang="less">
#app {
  user-select: none; // 禁止用户长按选择文本
  overflow: hidden;
}
</style>
