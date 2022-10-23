import axios from 'axios'
import { Toast } from 'vant'
import { getToken } from '@/utils/locale'
const request = axios.create({
  baseURL: 'http://interview-api-t.itheima.net'
})
// 添加请求拦截器
request.interceptors.request.use(
  function (config) {
    // 统一设置请求头
    config.headers.Authorization = `Bearer ${getToken()}`
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    console.log(error.response.data.message)
    // 并非所有的错误都有response跑出来 比如请求都没成功,所以我们需要一个判断
    if (error.response && error.response.data.message) {
      Toast.fail(error.response.data.message)
    }
    return Promise.reject(error)
  }
)
export default request
