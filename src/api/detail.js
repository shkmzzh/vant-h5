import request from '@/utils/request'
export const interviewShow = (id) =>
  request({
    method: 'GET',
    url: '/h5/interview/show',
    params: { id: id }
  })
