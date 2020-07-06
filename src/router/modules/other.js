/*
 * @Author: Hzh
 * @Date: 2020-07-06 14:31:22
 * @LastEditTime: 2020-07-06 14:33:14
 * @LastEditors: Hzh
 * @Description:其他路由
 */

const routers = [
  {
    path: '/404',
    component: () => import('views/404.vue'),
    meta: { title: '404' }
  }
]

export default routers
