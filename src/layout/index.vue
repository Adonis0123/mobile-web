<!--
 * @Author: Hzh
 * @Date: 2020-07-06 13:36:41
 * @LastEditTime: 2020-07-09 14:18:06
 * @LastEditors: Hzh
 * @Description:
-->
<template>
  <div class="layout">
    <!-- <header-nav /> -->
    <van-row class="header">
      <van-row class="title" type="flex" align="center">
        <icon-svg icon-class="logo" />
        <span>United Imaging</span>
      </van-row>
      <van-row class="desc">联影前端移动端组件库</van-row>
    </van-row>
    <div class="page">
      <keep-alive :include="keepAlivePage">
        <router-view :key="routerViewKey" />
      </keep-alive>
    </div>
  </div>
</template>

<script>
// import HeaderNav from './components/HeaderNav.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'Layout',

  components: {
    // HeaderNav
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
.layout {
  height: 100%;
  background: #fff;
  padding: 92px 40px 40px;
  box-sizing: border-box;
  .ios-fast();
  .header {
    margin-bottom: 60px;
    .title {
      padding-left: 32px;
      font-size: 50px;
      font-weight: 500;
      margin-bottom: 20px;
      .svg-icon {
        height: 70px;
        width: 70px;
        margin-right: 20px;
      }
    }
    .desc {
      padding-left: 40px;
      color: rgba(69, 90, 100, 0.6);
      font-size: 30px;
    }
  }
}
</style>
