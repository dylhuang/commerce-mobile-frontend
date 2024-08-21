const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

// 引入环境变量配置文件，配置文件和 cross-env 启动命令上的配置都会生效
require('dotenv').config({ path: path.resolve(__dirname, './env/.env.' + process.env.NODE_ENV) })

module.exports = {
  transpileDependencies: ['uview-ui'],
  lintOnSave: process.env.NODE_ENV !== 'prod',
  chainWebpack: (config) => {
    config.resolve.alias // 添加别名
      .set('@', resolve('src'))
  }
}
