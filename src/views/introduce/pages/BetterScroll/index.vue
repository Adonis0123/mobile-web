
<template>
  <div class="better-scroll">
    <h2 class="ele">基础用法</h2>
    <section class="ele">{{ use }}</section>
    <h2 class="ele">备注</h2>
    <section class="ele">
      要想betterScroll产生滚动效果，你需要设置'.wrapper'的高度,content的内容高度必须要高于warpper的高度
      如果content里面内容的高度是不固定的，那么需要给scroll传值data
    </section>
  </div>
</template>

<script>
export default {
  name: '',

  components: {},

  mixins: [],

  props: {},

  data() {
    return {
      use:
        '<scroll class="wrapper" :data="data" ><div class="content"> </div> </scroll>'
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
.better-scroll {
  height: 100%;
  padding: 0 40px;
}
</style>
