/**
 * 设置缓存
 */
export const setStorage = (key, obj) => {
  uni.setStorageSync(key, obj)
}
/**
 * 获取缓存
 */
export const getStorage = (key) => {
  return uni.getStorageSync(key)
}
/**
 * 删除指定缓存
 * @param { String  } key 设置缓存的值
 */
export const removeStorage = (key) => {
  uni.removeStorageSync(key)
}
/**
 * 清除所有缓存
 */
export const clearStorage = () => {
  uni.clearStorageSync()
}
