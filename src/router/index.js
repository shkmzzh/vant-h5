import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Register from '@/views/register'
import Detail from '@/views/detail'
import Layout from '@/views/layout'

import Like from '@/views/like'
import Article from '@/views/article'
import Collect from '@/views/collect'
import User from '@/views/myuser'
import { getToken } from '@/utils/locale'
Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/article/:id', component: Detail },
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', redirect: '/article' },
      { path: '/article', component: Article },
      { path: '/like', component: Like },
      { path: '/collect', component: Collect },
      { path: '/user', component: User }
    ]
  }
]

const router = new VueRouter({
  routes
})
const witePage = ['/login', '/register']
router.beforeEach((to, from, next) => {
  console.log('to', to)
  console.log('from', from)
  if (getToken()) {
    next()
  } else if (witePage.includes(to.path)) {
    next()
  } else {
    next('/login')
  }
})
// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
// 修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

export default router
