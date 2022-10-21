import request from '@/utils/request'
// 注册接口
export const userRegister = (data) =>
  request({
    method: 'POST',
    url: '/h5/user/register',
    data
  })
// 登录接口
export const userLogin = (data) =>
  request({
    method: 'POST',
    url: '/h5/user/login',
    data
  })
