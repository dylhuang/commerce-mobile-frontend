// import { setStorage } from '@/common/utils.js'
// import { getUserInfo, phoneCode, appletAuth } from '@/common/api/my'

const state = {
  isLogin: false, // 是否登录
  userInfo: null // 用户信息
}

const mutations = {
  setState(state, { key, value }) {
    state[key] = value
  },
  // 退出登录逻辑
  logout(state) {
    // state.isLogin = false
    // state.userInfo = null
    // setStorage('TokenKey', null)
  },
  toLogin(_state, is_redirect = false) {
    // const url = '/pagesMy/pages/login'
    // if (is_redirect) {
    //   uni.redirectTo({ url })
    // } else {
    //   uni.navigateTo({ url })
    // }
  }
}

const actions = {
  async login({ commit, dispatch }, params) {
    // try {
    //   if (!params) return Promise.reject('参数错误')
    //   const { phone, code } = params
    //   if (phone) {
    //     // 验证码登录
    //     const res = await phoneCode({ phone, code })
    //     setStorage('TokenKey', res.token)
    //   } else {
    //     // 授权登录
    //     const res = await appletAuth({ code })
    //     setStorage('TokenKey', res.token)
    //   }
    //   await dispatch('getUserInfo')
    //   commit('setState', { key: 'isLogin', value: true })
    // } catch (error) {
    //   setStorage('TokenKey', null)
    //   commit('setState', { key: 'isLogin', value: false })
    //   return Promise.reject(error)
    // }
  },

  // 获取用户信息
  async getUserInfo({ commit }) {
    // try {
    //   const res = await getUserInfo()
    //   commit('setState', { key: 'userInfo', value: res })
    // } catch (error) {
    //   commit('setState', { key: 'userInfo', value: null })
    //   return Promise.reject(error)
    // }
  }
}

export default {
  state,
  mutations,
  actions,
  namespaced: true
}
