import request from '@/utils/request'
// import { getToken } from '@/utils/locale'
export const interviewQuery = (params) =>
  request({
    method: 'GET',
    url: '/h5/interview/query',
    params
    // 有很多的接口都需要在请求头中设置token,才可以获取数据所以我们直接在请求拦截器中统一设置请求头
    // headers: { Authorization: `Bearer ${getToken()}` }
  })
