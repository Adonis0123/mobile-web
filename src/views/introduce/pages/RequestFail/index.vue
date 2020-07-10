<template>
  <div class="request-fail">
    <h2 class="ele">基础用法</h2>
    <section class="ele">{{ use }}</section>
    <request-fail v-if="showLoad" class="fail" :show-loading="showLoading" @click.native="requestAgain" />
    <van-button v-else type="default" @click="hadleClick">点我展示！</van-button>
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
            <td>content</td>
            <td>提示文本</td>
            <td>String</td>
            <td>''</td>
          </tr>
          <tr>
            <td>showLoading</td>
            <td>是否显示加载中</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
    </section>
    <h2 class="ele">备注</h2>
    <section class="ele">
      自己定义变量控制此组件是否显示，数据请求成功的话把showLoad设置为false,失败的话则把showLoad设置为true
      并把showLoading设置为false
    </section>
  </div>
</template>

<script>
import { RequestFail } from 'components'
export default {
  name: '',

  components: {
    RequestFail
  },

  mixins: [],

  props: {},

  data() {
    return {
      use: '<request-fail v-if="showLoad"  :show-loading="" @click.native="" />',
      showLoading: false,
      showLoad: false
    }
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {
    hadleClick() {
      this.showLoad = true
      setTimeout(() => {
        this.showLoading = false
      }, 2000)
    },
    requestAgain() {
      this.showLoading = true
      setTimeout(() => {
        this.showLoad = false
      }, 2000)
    }
  }
}
</script>

<style lang="less" scoped>
.ele {
  margin: 10px 0;
}
/deep/ .fail {
  height: 30px !important;
}
.request-fail {
  height: 100%;
  padding: 0 40px;
}
</style>
