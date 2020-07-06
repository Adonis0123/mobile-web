/*
 * @Author: Hzh
 * @Date: 2020-06-22 10:12:23
 * @LastEditTime: 2020-07-06 18:18:23
 * @LastEditors: Hzh
 * @Description:
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/styles/index.less'
import '@/assets/css/iconfont/iconfont.css'
import '@/assets/css/iconfont/iconfont.js'
import filter from '@/utils/filter'
import { localData, sessionData } from '@/utils/local.js'
import IconSvg from '@/components/IconSvg/index.vue'
import RequestFail from '@/components/RequestFail/index.vue'
// import scroll from 'components/Scroll.vue'
import VueTouch from 'vue-touch'
import { mapGetters } from 'vuex'
import cookie from 'vue-cookie'

// 按需引入
import {
  Toast, Search, Tabbar, TabbarItem, Button
} from 'vant'

//  /* vw 兼容适配 */
// const hacks = require('viewport-units-buggyfill/viewport-units-buggyfill.hacks')
// const viewportUnitsBuggyfill = require('viewport-units-buggyfill')
// viewportUnitsBuggyfill.init({ hacks })

// /* 移动端调试工具 */
// import Vconsole from 'vconsole'
// if (process.env.NODE_ENV !== 'production') {
//   new Vconsole()
// }

/* 使用vant组件 */
Vue.use(Toast).use(Search).use(Tabbar).use(TabbarItem).use(Button)
/* 使用滑动切换页面组件 */
Vue.use(VueTouch, { name: 'v-touch' })
VueTouch.config.swipe = {
  threshold: 50 // 设置左右滑动的距离
}
/* 全局使用svg图标 */
Vue.component('icon-svg', IconSvg)

/* 全局使用betterScroll */
Vue.component('scroll', scroll)

/*  全局使用请求失败组件 */
Vue.component('request-fail', RequestFail)
/* 全局导入过滤器 */
Object.keys(filter).forEach(key => Vue.filter(key, filter[key]))
/* 全局使用主题色 */
Vue.mixin({
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'themeColor'
    ])
  },
  mounted() { },
  methods: {}
})
Vue.config.productionTip = false
Vue.prototype.$cookie = cookie
Vue.prototype.localData = localData
Vue.prototype.sessionData = sessionData
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
