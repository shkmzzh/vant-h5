import request from '@/utils/request'
// 点击收藏、点赞
export const interviewOpt = (data) =>
  request({
    method: 'POST',
    url: '/h5/interview/opt',
    data
  })
