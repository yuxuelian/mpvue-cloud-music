import Vue from 'vue'
import axios from 'axios'
// 缓存过期时间
const CACHE_TIMEOUT = 2 * 60 * 1000
export default function () {
  axios.defaults.timeout = 20000
  axios.defaults.baseURL = 'http://118.126.108.24:3000/'
  // axios.defaults.baseURL = 'https://cloud-music.kaibo123.com/'
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
  axios.defaults.adapter = function (config) {
    return new Promise((resolve, reject) => {
      const requestMethod = config.method
      const cacheKey = `axios-${config.url}`
      if (requestMethod === 'get') {
        try {
          const cacheValue = mpvue.getStorageSync(cacheKey)
          if (cacheValue && (new Date()).getTime() - cacheValue.cacheTime < CACHE_TIMEOUT) {
            // 存在当前URL
            return resolve(cacheValue.response)
          }
        } catch (e) {
          console.log(e)
        }
      }
      mpvue.request({
        ...config,
        success: (response) => {
          if (requestMethod === 'get') {
            // 如果是get请求,则缓存数据
            mpvue.setStorageSync(cacheKey, {
              cacheTime: (new Date()).getTime(),
              response
            })
          }
          resolve(response)
        },
        fail: (error) => {
          reject(error)
        }
      })
    })
  }
  // 请求拦截器
  axios.interceptors.request.use((request) => {
    return request
  }, function (error) {
    return Promise.reject(error)
  })
  // 添加响应拦截器
  axios.interceptors.response.use((response) => {
    // 响应成功
    return response
  }, function (error) {
    // 响应失败
    return Promise.reject(error)
  })
  Vue.prototype.$axios = axios
}
