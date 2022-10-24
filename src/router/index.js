import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '@/views/login'
// import Register from '@/views/register'
// import Detail from '@/views/detail'
// import Layout from '@/views/layout'

// import Like from '@/views/like'
// import Article from '@/views/article'
// import Collect from '@/views/collect'
// import User from '@/views/myuser'
import { getToken } from '@/utils/locale'
// const login = () => import('@/views/login')
Vue.use(VueRouter)

// const routes = [
//   { path: '/login', component: () => import('@/views/login.vue') },
//   // component 判断如果是方法，它会调用的 },
//   { path: '/register', component: Register },
//   { path: '/detail', component: Detail },
//   {
//     path: '/',
//     component: Layout,
//     children: [
//       { path: '/', redirect: '/article' },
//       { path: '/article', component: Article },
//       { path: '/like', component: Like },
//       { path: '/collect', component: Collect },
//       { path: '/user', component: User }
//     ]
//   }
// ]

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login.vue')
    // component 判断如果是方法，它会调用的
  },
  {
    path: '/register',
    component: () => import('@/views/register.vue')
  },
  {
    path: '/video',
    component: () => import('@/views/videos.vue')
  },
  {
    path: '/detail',
    component: () => import('@/views/detail.vue')
  },
  {
    path: '/',
    redirect: '/article',
    component: () => import('@/views/layout.vue'),
    children: [
      {
        path: '/article',
        component: () => import('@/views/article.vue')
      },
      {
        path: '/collect',
        component: () => import('@/views/collect.vue')
      },
      {
        path: '/like',
        component: () => import('@/views/like.vue')
      },
      {
        path: '/user',
        component: () => import('@/views/myuser.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
const witePage = ['/login', '/register', '/video']
router.beforeEach((to, from, next) => {
  console.log('to', to)
  console.log('from', from)
  if (getToken()) {
    next()
  } else if (witePage.includes(to.path.toLowerCase())) {
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
