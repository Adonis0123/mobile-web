/*
 * @Author: Hzh
 * @Date: 2020-07-03 15:12:46
 * @LastEditTime: 2020-07-03 16:38:50
 * @LastEditors: Hzh
 * @Description:
 */
const getters = {
  themeColor: state => state.settings.color, // 获取主题颜色
  keepAlivePage: state => state.settings.keepAlivePage // 获取需要缓存的页面
}
export default getters
