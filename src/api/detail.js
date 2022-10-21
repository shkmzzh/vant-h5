import request from '@/utils/request'
// 获取详情页数据
export const interviewShow = (id) =>
  request({
    method: 'GET',
    url: '/h5/interview/show',
    params: { id: id }
  })
//   点赞和收藏
export const interviewOpt = (data) =>
  request({
    method: 'POST',
    url: '/h5/interview/opt',
    data
  })
