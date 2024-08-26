import App from './App'
import store from './store'
import uView from '@/uni_modules/uview-ui'
import '@/styles/index.css' // 全局引入样式
import '@/styles/animation.css' // 全局引入动画
import YyTabbar from '@/components/YyTabbar/YyTabbar'

Vue.use(uView)
console.log('当前环境', process.env.NODE_ENV)

// #ifdef h5
// h5开发环境添加vconsole
if (process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'trial' || process.env.NODE_ENV === 'development') {
  const VConsole = require('vconsole')
  new VConsole()
}
// h5自动计算屏幕宽度并响应11111111111111111
;(function () {
  let u = navigator.userAgent,
    w = window.innerWidth
  if (w > 750) w = 750
  if (!u.match(/AppleWebKit.*Mobile.*/) || u.indexOf('iPad') > -1) {
    window.innerWidth = 750 * (w / 1920)
    window.onload = function () {
      window.innerWidth = w
    }
  }
})()
// #endif

// #ifndef VUE3
import Vue from 'vue'

Vue.component("YyTabbar", YyTabbar);
// 判断市场常见的几种刘海屏机型
uni.getSystemInfo({
  success: function (res) {
    console.log('设备信息', res)
    // 设置状态栏高度
    Vue.prototype.$statusBar = res.statusBarHeight
    let navBarHeight = res.statusBarHeight
    // #ifdef MP-WEIXIN
    const custom = wx.getMenuButtonBoundingClientRect()
    navBarHeight = custom.top + custom.height + 8
    // #endif
    // #ifndef MP-WEIXIN
    navBarHeight = 44
    // #endif
    Vue.prototype.$navBarHeight = navBarHeight
    // 设置屏幕高度
    Vue.prototype.$screenHeight = res.screenHeight
    Vue.prototype.$windowHeight = res.windowHeight
    // 设置屏幕宽度
    Vue.prototype.$screenWidth = res.screenWidth
    // 底部tabbar高度
    Vue.prototype.$tabbarHeight = res.windowHeight - res.safeArea.bottom + 50

    // 设置底部高度
    Vue.prototype.$safeBottom = res.safeAreaInsets.bottom <= 0 ? 5 : 24
    Vue.prototype.$isDevtools = res.platform === 'devtools'
    if (res.platform == 'windows' || res.platform == 'mac') {
      Vue.prototype.$isPc = 'pc'
    } else {
      Vue.prototype.$isPc = 'wap'
    }
    // 判断是安卓还是ios
    Vue.prototype.$isIOS = (res.platform === 'devtools' && res.model.indexOf('iPhone') > -1) || res.platform === 'ios'
    // 限制pc打开固定宽度
    if (res.model == 'pc') {
      Vue.prototype.$isPc = true
      window.innerWidth = 375
      console.log(`PC-h5调试  手机系统：${Vue.prototype.$isIOS ? 'ios' : 'android'} 机型：${res.model}  屏幕宽：${res.windowWidth}, 屏幕高：${res.windowHeight}, 底部安全距离：${Vue.prototype.$safeBottom}rpx`)
    } else {
      console.log(`手机系统：${Vue.prototype.$isIOS ? 'ios' : 'android'} 机型：${res.model}  屏幕宽：${res.windowWidth}, 屏幕高：${res.windowHeight}, 底部安全距离：${Vue.prototype.$safeBottom}rpx`)
    }
  }
})

// 全局挂载
Vue.prototype.$store = store
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif
