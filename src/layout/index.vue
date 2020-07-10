<!--
 * @Author: Hzh
 * @Date: 2020-07-06 13:36:41
 * @LastEditTime: 2020-07-10 15:55:16
 * @LastEditors: Hzh
 * @Description:
-->
<template>
  <div class="layout">
    <header-nav v-if="showHeaderNav" :title="title" />

    <div class="page" :class="{'is-show':showHeaderNav}">
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
    return {
      title: '',
      showHeaderNav: false
    }
  },
  computed: {
    ...mapGetters(['keepAlivePage']),
    routerViewKey() {
      return this.$route.fullPath
    }
  },
  watch: {
    $route(e) {
      this.title = e.meta.title
      this.showHeaderNav = e.meta.showHeaderNav
    }
  },
  created() {
    this.title = this.$route.meta.title
    this.showHeaderNav = this.$route.meta.showHeaderNav
  },
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
.layout {
  height: 100%;
  .page {
    height: 100%;
  }
  .is-show {
    height: calc(100% - 90px);
  }
}
</style>
