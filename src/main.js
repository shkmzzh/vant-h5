import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入vant组件库
import '@/utils/vant'
// 注册全局组件
import ArticleItem from '@/components/ArticleItem.vue'
Vue.component(ArticleItem.name, ArticleItem)
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
