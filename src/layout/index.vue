<!--
 * @Author: Hzh
 * @Date: 2020-07-06 13:36:41
 * @LastEditTime: 2020-07-06 18:06:35
 * @LastEditors: Nahco.Huang
 * @Description:
-->
<template>
  <div class="layout">
    <header-nav />
    <div class="page">
      <keep-alive :include="keepAlivePage">
        <router-view :key="routerViewKey" />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'Layout',

  components: {
    HeaderNav
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

  mounted() {
    /* 设置主题颜色 */
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
    }

    // /**
    //  * @description:解决ios底部导航的bug
    //  */
    // fixIosBug() {
    //   const u = navigator.userAgent
    //   const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    //   if (isiOS) {
    //     window.history.pushState({}, 'title', '#')
    //   }
    // }
  }
}
</script>

<style lang="less" scoped>
  .layout{
    height: 100%;
    .page{
      background: @color-background;
      height: calc(100% - 90px);
    }
  }
</style>
