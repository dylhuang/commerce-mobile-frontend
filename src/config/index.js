let NODE_ENV = process.env.NODE_ENV
let configUrl = ''

if (NODE_ENV === 'develop' || NODE_ENV === 'development') {
  configUrl = {
    api_domain: 'https://api-dev.yueyanglearning.com'
  }
} else if (NODE_ENV === 'trial') {
  configUrl = {
    api_domain: 'https://api-test.yueyanglearning.com'
  }
} else {
  configUrl = {
    api_domain: 'https://api.yueyanglearning.com'
  }
}
export default configUrl
