const state = {
  isTabBar: true //是否显示tabBar
}

const mutations = {
  setTabBar(state, isTabBar = true) {
    state.isTabBar = isTabBar
    if (isTabBar) {
      uni.showTabBar()
    } else {
      uni.hideTabBar()
    }
  }
}

const actions = {}

export default {
  state,
  mutations,
  actions,
  namespaced: true
}
