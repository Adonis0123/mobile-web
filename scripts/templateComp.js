
module.exports = {
  vueTemplate: compoenntName => {
    return `<template>
  <div class="${compoenntName}"></div>
</template>

<script>
import { ${compoenntName} } from 'components'
export default {
  name: '',

  components: {
    ${compoenntName}
  },

  mixins: [],

  props: {},

  data() {
    return {}
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
  .${compoenntName}{
    height: 100%;
    padding: 0 40px;
  }
</style>
`
  }
}
