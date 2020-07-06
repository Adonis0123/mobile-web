/*
 * @Author: Hzh
 * @Date: 2020-07-03 15:12:46
 * @LastEditTime: 2020-07-06 15:11:55
 * @LastEditors: Hzh
 * @Description:
 */
/* 设置模块 */
const state = {
  color: '#3B8CFF', // 主题颜色
  keepAlivePage: [] // 需要缓存的页面
}

const mutations = {
  GET_COLOR: (state, color) => {
    state.color = color
  },
  CHANGE_KEEP_ALIVE: (state, name) => {
    const keepAlivePage = state.keepAlivePage
    const index = keepAlivePage.indexOf(name)
    if (index > -1) {
      keepAlivePage.splice(index, 1)
    }
  },
  ADD_KEEP_ALVE: (state, name) => {
    state.keepAlivePage = state.keepAlivePage.concat(name)
  }
}

const actions = {
  getColor({ commit }) {
    return new Promise((resolve, reject) => {
      commit('GET_COLOR', '#3B8CFF')
      resolve()
    })
  },
  changeKeepAlive({ commit }, name) {
    commit('CHANGE_KEEP_ALIVE', name)
  },
  addKeepAlivePage({ commit }, name) {
    commit('ADD_KEEP_ALVE', name)
  }
}

export default {
  namespaced: true, // 每个模块都需要添加 namespaced: true
  state,
  mutations,
  actions
}

/*

  computed: {
    ...mapState("settings", ["themeColor"])
  },
methods:{
      themeChange(val) {
      this.$store.dispatch("settings/changeSetting", {
        key: "themeColor",
        value: val
      });
    }
}

 */
