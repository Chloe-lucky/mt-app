import axios from 'axios'
axios.defaults.baseURL = 'https://open.duyiedu.com'
axios.interceptors.request.use(function (config) {
  config.params = {
    ...config.params,
    appkey: 'XIAODENG_1569376789094'
  }
  return config
}, function (error) {
  return Promise.reject(error)
})
export default axios
