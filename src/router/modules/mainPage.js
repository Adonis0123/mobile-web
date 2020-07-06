/*
 * @Author: Hzh
 * @Date: 2020-07-06 09:28:46
 * @LastEditTime: 2020-07-06 18:21:53
 * @LastEditors: Hzh
 * @Description: 首页路由
 */
const routers = {
  path: '/home',
  name: 'Home',
  redirect: '/outpatient',
  component: () => import('@/layout/home.vue'),
  children: [
    {
      path: '/outpatient',
      name: 'Outpatient',
      meta: { title: '门诊患者', searchable: true },
      component: () => import('views/outpatient/index.vue')
    },
    {
      path: '/inpatients',
      name: 'Inpatients',
      meta: { title: '住院患者' },
      component: () => import('views/inpatients/index.vue')
    },
    {
      path: '/message',
      name: 'Message',
      meta: { title: '消息' },
      component: () => import('views/message/index.vue')
    },
    {
      path: '/mine',
      name: 'Mine',
      meta: { title: '我的', searchable: false },
      component: () => import('views/mine/index.vue')
    }
  ]
}

export default routers
