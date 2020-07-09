/*
 * @Author: Hzh
 * @Date: 2020-07-06 09:28:46
 * @LastEditTime: 2020-07-09 14:16:19
 * @LastEditors: Hzh
 * @Description: 首页路由
 */
const routers = {
  path: '/home',
  name: 'Home',
  redirect: '/introduce',
  component: () => import('@/layout/home.vue'),
  children: [
    {
      path: '/introduce',
      name: 'Introduce',
      meta: { title: '介绍' },
      component: () => import('views/introduce/index.vue')
    }
  ]
}

export default routers
