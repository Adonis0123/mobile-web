/*
 * @Author: Hzh
 * @Date: 2020-07-06 14:31:22
 * @LastEditTime: 2020-07-10 14:34:56
 * @LastEditors: Hzh
 * @Description:组件详情路由
 */

const routers = [
  {
    path: '/icon-svg',
    name: 'IconSvg',
    meta: { title: 'IconSvg 组件', showHeaderNav: true },
    component: () => import('introduce/IconSvg/index.vue')
  },
  {
    path: '/loading',
    name: 'Loading',
    meta: { title: 'Loading 等待加载组件', showHeaderNav: true },
    component: () => import('introduce/Loading/index.vue')
  },
  {
    path: '/request-fail',
    name: 'RequestFail',
    meta: { title: 'RequestFail 重新加载组件', showHeaderNav: true },
    component: () => import('introduce/RequestFail/index.vue')
  },
  {
    path: '/better-scroll',
    name: 'BetterScroll',
    meta: { title: 'Scroll betterScroll组件', showHeaderNav: true },
    component: () => import('introduce/BetterScroll/index.vue')
  }
]

export default routers
