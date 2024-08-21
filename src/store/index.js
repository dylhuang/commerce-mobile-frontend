import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import createPersistedState from 'vuex-persistedstate'
import { localStorage } from 'mp-storage'

import common from './modules/common.js'
import user from './modules/user.js'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    common,
    user
  },
  plugins: [
    // 持久化存储
    // 使用时，所有数据需要使用commit进行修改，否则无法做持久化
    // 就是把数据存到storage里面，慎用！！！
    createPersistedState({
      storage: localStorage,
      paths: ['user'] // 模块名
    })
  ]
})
