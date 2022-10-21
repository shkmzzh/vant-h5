import request from '@/utils/request'
export const interviewOptList = (params) =>
  request({
    method: 'GET',
    url: '/h5/interview/opt/list',
    params
  })
