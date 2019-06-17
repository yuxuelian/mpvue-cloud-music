import Vue from 'vue'
import axios from 'axios'

export default function () {
  axios.defaults.timeout = 20000
  axios.defaults.baseURL = 'http://118.126.108.24:3000/'
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
  axios.defaults.adapter = function (config) {
    return new Promise((resolve, reject) => {
      const data = config.method === 'get' ? config.params : JSON.stringify(config.data)
      // wx小程序 发起请求相应 log 就可以看到熟悉的返回啦
      mpvue.request({
        url: config.url,
        method: config.method,
        data,
        success: (res) => {
          return resolve(res)
        },
        fail: (err) => {
          return reject(err)
        }
      })
    })
  }
// 请求拦截器
  axios.interceptors.request.use(function (request) {
    return request
  }, function (error) {
    return Promise.reject(error)
  })
// 添加响应拦截器
  axios.interceptors.response.use(function (response) {
    // 响应成功
    return response
  }, function (error) {
    // 响应失败
    return Promise.reject(error)
  })
  Vue.prototype.$axios = axios
}
