/*
 * @Author: Hzh
 * @Date: 2020-07-03 15:12:46
 * @LastEditTime: 2020-07-06 14:45:21
 * @LastEditors: Hzh
 * @Description:
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routerFiles = require.context('./modules', true, /\.js$/)
let routerList = []

routerFiles.keys().forEach((fileName) => {
  if (routerFiles(fileName).default instanceof Array) {
    routerList = routerList.concat(routerFiles(fileName).default)
  } else {
    routerList.push(routerFiles(fileName).default)
  }
})

const routes = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/home',
    component: () => import('@/layout/index.vue'),
    children: routerList
  }
]
/*  404 页面必须放在最后！*/
const errorPage = { path: '*', redirect: '/404' }
routes.push(errorPage)

// 路由配置
const RouterConfig = {
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
}

const router = new VueRouter(RouterConfig)

router.beforeEach(async(to, from, next) => {
  next()
})
export default router
