import request from '@/utils/request'
// 用户注册
export const userRegister = (data) =>
  request({
    method: 'POST',
    url: '/h5/user/register',
    data
  })
// 用户登录
export const userLogin = (data) =>
  request({
    method: 'POST',
    url: '/h5/user/login',
    data
  })
