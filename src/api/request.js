import { showToast } from '@/utils/toast.js'
import { getStorage } from '@/utils/storage.js'
import configURL from '@/config/index'
import store from '@/store'

/*
 *公共请求方法
 *config.method: 请求类型  post|get  默认post
 *config.url: 请求地址
 *config.params: 请求参数
 *config.describe: 调试显示标题
 *config.success: 成功回调
 *config.fail：失败回调
 */
export const request = async (config) => {
  const header = {
    'Content-Type': 'application/json;charset=utf-8',
    Authorization: 'Bearer ' + getStorage('TokenKey'),
    ...(config.header || {})
  }
  return new Promise((resolve, reject) => {
    uni.request({
      url: `${configURL.api_domain}${config.url}?t=${Date.now()}`,
      method: config.method || 'GET',
      header,
      data: {
        ...config.params
      },
      success: (res) => {
        if (res?.statusCode === 200) {
          resolve(res.data.data)
        } else if (res?.statusCode === 401) {
          // token失效
          const token = getStorage('TokenKey')
          if (!token || token === '') {
            showToast(`暂未登录，请先登录`)
            reject(`暂未登录，请先登录`)
          } else {
            showToast(`登录失效，请重新登录`)
            reject(`登录失效，请重新登录`)
            store.commit('user/logout')
          }
          uni.$u.sleep(1000).then(() => {
            uni.navigateTo({
              url: '/pagesMy/pages/login'
            })
          })
          reject(res.data.msg)
        } else if (res?.statusCode === 400) {
          showToast(res.data.msg)
          console.log(`有逻辑异常或者参数异常 接口${config.describe} || 地址：${configURL.api_domain}${config.url} || 原因：${res.data.msg}`)
          reject(res.data.msg)
        } else if (res.statusCode === 500) {
          showToast(res.data.msg)
          console.log(`接口:${config.describe} || 地址：${configURL.api_domain}${config.url} || 原因：${res.data.msg}`)
          reject(res.data.msg)
        } else {
          showToast(res.data.msg)
          console.log(`接口:${config.describe} || 地址：${configURL.api_domain}${config.url} || 原因：${res.data.msg}`)
          reject(res.data.msg)
        }
      },
      fail: (err) => {
        showToast(`请求失败，服务异常`)
        reject(`请求失败，服务异常`)
      }
    })
  })
}

/**
 * @name asyncRequest
 * @use 异步请求方法，不需要做任何限制和回调的操作
 * @param {object} config 配置
 * @param {string} config.url 请求地址
 * @param {string} config.method 请求类型
 * @param {any} config.params 请求参数
 * @param {string} config.describe 接口描述
 * @param {object?} config.header 请求头
 * @return {promise} 返回promise对象
 */
export const asyncRequest = async (config) => {
  const header = {
    Authorization: getStorage('TokenKey'),
    'Content-Type': 'application/json;charset=utf-8',
    ...(config.header || {})
  }
  return new Promise((resolve, reject) => {
    uni.request({
      url: `${configURL.api_domain}${config.url}?t=${Date.now()}`,
      method: config.method || 'GET',
      header,
      data: {
        ...config.params
      },
      success: (res) => {
        if (res?.statusCode === 401) {
          reject('登录失效')
          console.log('登录失效')
        } else if (res.statusCode === 400) {
          reject('登录失效')
          console.log(`有逻辑异常或者参数异常 接口${config.describe} || 地址：${configURL.api_domain}${config.url} || 原因：${res.data.msg}`)
        } else if (res.statusCode === 500) {
          reject('登录失效')
          console.log(`接口${config.describe} || 地址：${configURL.api_domain}${config.url} || 原因：${res.data.msg}`)
        } else if (res.statusCode == 200) {
          resolve(res.data.code)
        } else {
          reject('未知异常')
          console.log('未知异常')
        }
      },
      fail: (err) => {
        showToast(`请求失败，服务异常`)
        reject('请求失败，服务异常')
      }
    })
  })
}

export const upload = async (filePath, name, formData, config) => {
  const header = {
    Authorization: getStorage('TokenKey'),
    'Content-Type': 'application/json;charset=utf-8',
    ...config.header
  }
  return new Promise((resolve, reject) => {
    uni.uploadFile({
      url: `${configURL.api_domain}${config.url}?t=${Date.now()}`,
      header,
      filePath,
      name,
      formData: {
        ...formData
      },
      success: (res) => {
        const data = JSON.parse(res.data)
        if (res.statusCode === 200) {
          resolve(data)
        } else {
          reject(data)
        }
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}
