import axios from 'axios'

// export const toLogin = function (data) {
//   return axios({ method: 'POST', url: 'http://interview-api-t.itheima.net/h5/user/login', data: data })
// }
export const toLogin = (data) => axios({ method: 'POST', url: 'http://interview-api-t.itheima.net/h5/user/login', data: data })
