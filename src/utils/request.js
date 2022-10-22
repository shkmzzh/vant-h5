// 将所有的登陆相关的接口都放这里，登陆模块的所有接口都放这
// export 与 import的使用
import axios from 'axios'
import { Toast } from 'vant'
import { getToken } from '@/utils/locale'
// import router from '@/router/index'

// 个性定制化一个axios,产生一个定制后axios,不改变原axios，当然也可以定制多个
// 调用 axios.create() 函数，创建一个 axios 的实例对象，用 request 来接收
const _axios = axios.create({
  // 指定请求的根路径
  baseURL: 'http://interview-api-t.itheima.net'
})

// 请求拦截与响应拦截
// 请求拦截:统一token处理
_axios.interceptors.request.use(
  (config) => {
    console.log('请求拦截', config)
    // config.headers.xxx = '91真牛'
    config.headers.Authorization = `Bearer ${getToken()}`
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
    // console.log('接口请求出错了')
    // 统一的接口请求出错处理
    // 拦截错误，提示错误信息
    console.log('error')
    console.dir(error)
    console.log(error.response.data.message)
    // 有错误信息才提示
    // 并非所有的错误都有response跑出来
    // 有response和message才提示
    if (error.response && error.response.data.message) {
      // error.response.data.message是后端 给我们的，我们要考虑可能后端不提供的场景
      Toast.fail(error.response.data.message)
      // removeToken() // token错误清除token  模拟token失效
      // router.push('/login') // 没有token跳转 路由守卫里的token验证需要刷新才会跳转，所以这里我们手动跳
    }
    return Promise.reject(error)
  }
)

export default _axios
