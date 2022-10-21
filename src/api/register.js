import request from '@/utils/request'

// request 相当于就是一个axios，只不过在这里面我们使用axios.create()方法在axios里面挂载了一个基地址
export const userRegister = (data) => { // 用一个变量来接收函数返回的值
  // 这里return 相当于把 axios包括里面的配置按需导出了，就像你return一个 hellow 外界就可以调用得到 hellow
  return request({
    url: 'user/register',
    method: 'post',
    data // 对象名相同可以简写
  })
}
