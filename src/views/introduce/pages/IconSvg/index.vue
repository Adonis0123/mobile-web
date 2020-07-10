
<template>
  <div class="icon-svg">
    <h2 class="ele">基础用法</h2>
    <section class="ele">{{ use }}</section>
    <icon-svg icon-class="logo" class="ele" />
    <h2 class="ele">备注</h2>
    <section class="ele">修改图标颜色的话直接通过css修改即可</section>
  </div>
</template>

<script>
import { IconSvg } from 'components'
export default {
  name: '',

  components: { IconSvg },

  mixins: [],

  props: {},

  data() {
    return {
      use: '<icon-svg icon-class="name" />'
    }
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {}
}
</script>

<style lang="less" scoped>
.ele {
  margin: 10px 0;
}
.icon-svg {
  height: 100%;
  padding: 0 40px;
}
</style>
