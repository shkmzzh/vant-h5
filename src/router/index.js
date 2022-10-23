import Vue from 'vue'
import VueRouter from 'vue-router'
import { getToken } from '@/utils/locale'
Vue.use(VueRouter)
// 动态导入  import ('./xxx/xxx')
// 静态导入在页面加载时就会被导入，有时模块太大且不会在页面加载时使用，可以使用动态导入，在需要用的时候在导入模块
const routes = [
  { path: '/login', component: () => import('@/views/login.vue') },
  { path: '/register', component: () => import('@/views/register.vue') },
  { path: '/detail/:id?', component: () => import('@/views/detail.vue') },
  {
    path: '/',
    component: () => import('@/views/layout'),
    redirect: '/article',
    children: [
      { path: '/article', component: () => import('@/views/article.vue') },
      { path: '/like', component: () => import('@/views/like.vue') },
      { path: '/myuser', component: () => import('@/views/myuser.vue') },
      { path: '/collect', component: () => import('@/views/collect.vue') }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 路由守卫 除了登录页和注册页其他页面没有token是不允许访问的
// 全局前置守卫：
// 1. 所有的路由一旦被匹配到，在真正渲染解析之前，都会先经过全局前置守卫
// 2. 只有全局前置守卫放行，才能看到真正的页面

// 任何路由，被解析访问前，都会先执行这个回调
// 1. from 你从哪里来， 从哪来的路由信息对象
// 2. to   你往哪里去， 到哪去的路由信息对象
// 3. next() 是否放行，如果next()调用，就是放行 => 放你去想去的页面
//    next(路径) 拦截到某个路径页面
const whiteList = ['/login', '/register']
router.beforeEach((to, from, next) => {
  // 如果有token的话就放行
  if (getToken()) {
    next()
  } else if (whiteList.includes(to.path.toLowerCase())) {
    // 对于不需要token的页面,也应该放行
    next()
  } else {
    // 对于没有token有不是访问白名单里面的页面的路径直接让其到登录页去
    next('/login')
  }
})
export default router
