import request from '@/utils/request'
// import { getToken } from '@/utils/locale'
// 获取面经列表
export const interviewQuery = (params) =>
  request({
    method: 'GET',
    url: '/h5/interview/query',
    params
    // headers: { Authorization: `Bearer ${getToken()}` }  // 因为多个页面都需要用到token 所以直接在 请求头中做统一处理
  })
