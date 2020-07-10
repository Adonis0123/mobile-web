/*
 * @Author: Hzh
 * @Date: 2020-07-06 14:31:22
 * @LastEditTime: 2020-07-10 14:55:55
 * @LastEditors: Hzh
 * @Description:其他路由
 */

const routers = [
  {
    path: '/project-introduction',
    name: 'projectIntroduction',
    component: () => import('views/projectIntroduction/index.vue'),
    meta: { title: '模板功能介绍', showHeaderNav: true }
  },
  {
    path: '/404',
    component: () => import('views/404.vue'),
    meta: { title: '404' }
  }
]

export default routers
