import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 动态导入  import ('./xxx/xxx')
// 静态导入在页面加载时就会被导入，有时模块太大且不会在页面加载时使用，可以使用动态导入，在需要用的时候在导入模块
const routes = [
  { path: '/login', component: () => import('@/views/login.vue') },
  { path: '/register', component: () => import('@/views/register.vue') },
  { path: '/detail', component: () => import('@/views/detail.vue') },
  {
    path: '/',
    component: () => import('@/views/layout'),
    redirect: '/article',
    children: [
      { path: 'article', component: () => import('@/views/article.vue') },
      { path: 'like', component: () => import('@/views/like.vue') },
      { path: 'myuser', component: () => import('@/views/myuser.vue') },
      { path: 'collect', component: () => import('@/views/collect.vue') }
    ]
  }
]

const router = new VueRouter({
  routes
})
export default router
