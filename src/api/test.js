import request from '@/utils/request'
export const interviewUpdate = (stem, content) =>
  request({
    method: 'POST',
    url: '/admin/interview/create',
    data: { stem: stem, content: content }
  })
