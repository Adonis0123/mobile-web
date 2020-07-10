
<template>
  <div class="project-introduction">
    <h2 class="ele">1.自动生成文件代码</h2>
    <section class="ele content">
      在scripts文件夹中，generateVue负责生成文件代码，template是基于vue推荐规范的代码模板,在package.json中已经设定好命名，
      你只需要输入npm run new:vue，即可在对应的地方生成项目文件
    </section>
    <h2 class="ele">2.自动导入component</h2>
    <section class="ele content">
      在components文件夹的index.js中，已经定义好模块导出的方法，我们只需要再vue.config.js中再定义一个便捷引入的方法
      config.resolve.alias.set('components', resolve('src/components/index.js'))，既可以在你需要引入代码的地方中
      这样使用即可：import { xxx } from 'components'，注意这里xxx的名字要与组件文件夹的名字一一对应才不会出错。
    </section>
    <h2 class="ele">3.全局设定主题颜色</h2>
    <section class="ele content">
      如果你想更改全局的主题颜色，只需要在vuex的settings文件中修改getColor方法，即可全局使用这个主题颜色（此主题颜色已经全局混入），
      在js中，你可以使用this.themeColor找到此颜色，在css中，你可以这样使用此主题颜色color: var(--color-background-theme);
    </section>
    <h2 class="ele">4.打包做分包处理</h2>
    <section class="ele content">
      .env.production文件中代表的是生产环境的包，.env.staging代表的是预生产环境的包，你可以在这两个文件中定义不同的变量
      来对应不同环境需要的值，运行npm run build:prod就是正式环境的包，npm run build:stage就是预生产环境的包。
    </section>
    <h2 class="ele">5.使用gzip压缩项目文件的大小并进行拆包处理</h2>
    <section class="ele content">
      在vue.config.js中，已使用插件CompressionPlugin进行gzip压缩，并把vant、使用次数较多的component进行拆包处理。
    </section>
  </div>
</template>

<script>
export default {
  name: 'ProjectIntroduction',

  components: {},

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
.project-introduction {
  height: 100%;
  padding: 0 40px;
  .ios-fast()
}
.ele {
  margin: 10px 0;
}
.content{
  text-indent: 1em;
}
</style>
