/* 主要页面 */
const routers = [
  {
    // 首页
    path: '/',
    name: 'Home',
    components: {
      default: () => import('@/views/home/index.vue'),
      'footer-bar': () => import('@/components/FooterBar/index.vue')
    },
    meta: { title: '龙岗健康在线' }
  }
]

export default routers
