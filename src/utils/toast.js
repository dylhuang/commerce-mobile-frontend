/**
 * 显示消息提示框
 * @param { String|Object } e 提示的文字内容，显示在loading的下方 或 其他选项 非必传
 */
export const showToast = (e) => {
  let options = {
    position: 'bottom',
    icon: 'none',
    duration: 1500,
    mask: false
  }
  if (typeof e === 'string') {
    options.title = e
  } else if (typeof e === 'object') {
    options = {
      ...options,
      ...e
    }
  }
  uni.showToast(options)
}
