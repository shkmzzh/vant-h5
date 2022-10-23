// 有些页面需要token才可以访问,所以需要本地存储，这里单独封装一个模块来处理token
const TOKENKEY = 'token'
// 储存
export const setToken = (value) => {
  localStorage.setItem(TOKENKEY, value)
}
// 获取
export const getToken = () => localStorage.getItem(TOKENKEY)
// 删除
export const removeToken = () => {
  localStorage.removeItem(TOKENKEY)
}
