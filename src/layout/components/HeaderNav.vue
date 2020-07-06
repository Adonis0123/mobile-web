<!--
 * @Author: Nahco.Huang
 * @Date: 2020-07-06 13:48:12
 * @LastEditTime: 2020-07-06 17:39:24
 * @LastEditors: Nahco.Huang
-->

<template>
  <div class="header-nav">
    <div v-if="isSearch" class="search-bar">
      <van-search
        v-model="keyword"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="isSearch = false"
      >
        <icon-svg slot="left-icon" class="search-icon" icon-class="sousuo" />
      </van-search>
    </div>
    <div v-else class="nav-bar">
      <div class="left">
        <icon-svg
          v-if="isShowBack"
          icon-class="fanhui"
          class="back-icon"
          @click.native="onClickBack"
        />
      </div>
      <div class="center">
        <p>{{ $route.meta.title }}</p>
      </div>
      <div class="right">
        <div v-if="$route.meta.searchable" class="search-icon" @click="isSearch = true">
          <icon-svg icon-class="sousuo" />
        </div>
        <slot name="right">
          <div v-if="isShowSwitch" class="switch-icon">
            <icon-svg
              v-if="listType === 1"
              icon-class="gengduohengpaipailie"
              @click.native="onSwitchListType(2)"
            />
            <icon-svg
              v-if="listType === 2"
              icon-class="liebiaopailie"
              @click.native="onSwitchListType(1)"
            />
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderNav',

  components: {},

  mixins: [],

  props: {},

  data() {
    return {
      isSearch: false,
      keyword: '',
      listType: 1
    }
  },

  computed: {
    /**
     * @description: 判断是否显示返回按钮
     */
    isShowBack() {
      return this.$route.matched.length > 3
    },
    /**
     * @description: 判断是否显示列表类型切换按钮
     */
    isShowSwitch() {
      return this.$route.path === '/outpatient' || this.$route.path === '/inpatients'
    }
  },

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {
    /**
     * @description: 处理导航栏左部返回按钮点击事件
     */
    onClickBack() {},

    /**
     * @description: 处理搜索栏搜索事件
     */
    onSearch() {
      if (this.searchable) {
        console.log('search')
      }
    },

    /**
     * @description: 处理切换列表类型按钮点击事件
     * @param typeCode{number}  1:卡片类型 2：列表类型
     */
    onSwitchListType(typeCode) {
      this.listType = typeCode
      this.$emit('list-switched')
    }
  }
}
</script>

<style lang="less" scoped>
  .header-nav{
    box-sizing      : border-box;
    width           : 100%;
    height          : 90px;
    background-color: #F9F9F9;
    // 导航
    .nav-bar {
      box-sizing     : border-box;
      width          : 100%;
      padding        : 0 35px;
      display        : flex;
      justify-content: space-between;
      align-items    : center;
      // 导航栏左部
      .left {
        width     : 200px;
        display   : flex;
        align-self: center;
        // 返回图标
        .back-icon {
          width : 39px;
          height: 39px;
          color : #000000;
        }
      }
      // 导航栏中部
      .center {
        width      : 350px;
        font-size  : 36px;
        font-weight: bold;
        color      : #000000;
        line-height: 90px;
        text-align : center;
      }
      // 导航栏右部
      .right {
        width          : 200px;
        display        : flex;
        justify-content: flex-end;
        align-self     : center;
        & > div {
          width : 39px;
          height: 39px;
          &:not(:last-child) {
            margin-right: 30px;
          }
        }
        .svg-icon {
          width : 39px;
          height: 39px;
          color : #898989;
        }
      }
    }
    // 搜索
    .search-bar {
      // 穿透修改vant搜索组件样式
      /deep/ .van-search {
        box-sizing      : border-box;
        height          : 90px;
        padding         : 14px 24px;
        background-color: #F9F9F9;
        .van-search__content {
          height          : 60px;
          background-color: #E6E6E6;
          border-radius   : 10px;
          .van-cell {
            padding: 0;
            .van-field__left-icon {
              display   : flex;
              align-self: center;
              .search-icon {
                width : 26px;
                height: 26px;
                color : #898989;
              }
            }
            .van-cell__value {
              .van-field__body {
                height     : 100%;
                font-size  : 26px;
                font-weight: 400;
                line-height: 40px;
                .van-icon-clear {
                  left  : -10px;
                  width : 32px;
                  height: 32px;
                  color : #999999;
                }
              }
            }
          }
        }
        .van-search__action {
          padding-left: 30px;
          font-size   : 32px;
          font-weight : 500;
          color       : #999999;
        }
      }
    }
  }
</style>
