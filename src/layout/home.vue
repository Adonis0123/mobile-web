<!--
 * @Author: Hzh
 * @Date: 2020-07-06 13:36:32
 * @LastEditTime: 2020-07-10 15:41:37
 * @LastEditors: Hzh
 * @Description:
-->
<template>
  <div class="frame">
    <van-row class="header">
      <van-row class="title" type="flex" align="center">
        <icon-svg icon-class="logo" />
        <span>United Imaging</span>
      </van-row>
      <van-row class="desc">联影前端移动端组件库</van-row>
    </van-row>
    <section class="single-page">
      <keep-alive :include="keepAlivePage">
        <router-view :key="routerViewKey" />
      </keep-alive>
    </section>
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
  box-sizing: border-box;
  padding: 92px 40px 40px;
  background: #fff;
  height: 100%;
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
  .single-page {
    // height: calc(100% - 164px);
  }
}
</style>
