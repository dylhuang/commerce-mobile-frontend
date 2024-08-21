/**
 * 显示 loading 提示框, 需主动调用
 * @param { String|Object } e 提示的文字内容，显示在loading的下方 或 其他选项 非必传
 * @example loading();
 */
export const showLoading = (e) => {
  let options = {
    mask: true
  }
  if (typeof e === 'string') {
    options.title = e
  } else if (typeof e === 'object') {
    options = {
      ...options,
      ...e
    }
  }
  uni.showLoading(options)
}
export const hideLoading = () => {
  uni.hideLoading()
}
