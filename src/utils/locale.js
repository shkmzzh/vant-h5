// 处理 token
const TOKENKEY = 'token'

// 存储
export const setToken = (value) => {
  localStorage.setItem(TOKENKEY, value)
}

// 获取
export const getToken = () => {
  return localStorage.getItem(TOKENKEY)
}

// 存储
export const removeToken = () => {
  localStorage.removeItem(TOKENKEY)
}
