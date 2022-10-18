import request from '@/utils/request'

// 注册
export const userRegister = (data) => {
  return request({
    url: 'user/register',
    method: 'post',
    data
  })
}
