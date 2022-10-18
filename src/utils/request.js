// 将所有的登陆相关的接口都放这里，登陆模块的所有接口都放这
// export 与 import的使用
import axios from 'axios'

// 个性定制化一个axios,产生一个定制后axios,不改变原axios
const _axios = axios.create({
  baseURL: 'http://interview-api-t.itheima.net/h5'
})

// 请求拦截与响应拦截
// 请求拦截:统一token处理
_axios.interceptors.request.use(
  (config) => {
    console.log('请求拦截', config)
    // config.headers.xxx = '91真牛'
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
// 响应拦截：统一错误处理
_axios.interceptors.response.use(
  (res) => {
    console.log('响应拦截的res', res)
    return res.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default _axios
