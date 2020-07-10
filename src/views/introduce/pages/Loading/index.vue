<template>
  <div class="loading">
    <h2 class="ele">基础用法</h2>
    <section class="ele">{{ use }}</section>
    <van-button type="default" @click="hadleShow">点我展示！</van-button>
    <loading :show-overlay="loading" :loading-text="'搜索中...'" />
    <h2 class="ele">参数说明</h2>
    <section class="ele">
      <table>
        <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>showOverlay</td>
            <td>是否展示提示组件</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>loadingText</td>
            <td>提示文案</td>
            <td>String</td>
            <td>加载中...</td>
          </tr>
        </tbody>
      </table>
    </section>
    <h2 class="ele">备注</h2>
    <section class="ele" />
  </div>
</template>

<script>
import { Loading } from 'components'
export default {
  name: '',

  components: {
    Loading
  },

  mixins: [],

  props: {},

  data() {
    return {
      use: '<loading :show-overlay="true" :loading-text="" />',
      loading: false
    }
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {
    hadleShow() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 3000)
    }
  }
}
</script>

<style lang="less" scoped>
.ele {
  margin: 10px 0;
}
  .loading{
    height: 100%;
    padding: 0 40px;
  }
</style>
