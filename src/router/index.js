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
Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/article/:id', component: Detail },
  {
    path: '/',
    component: Layout,
    children: [
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

export default router
