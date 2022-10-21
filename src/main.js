import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/utils/vant'
import ArticleItem from '@/components/ArticleItem.vue'
// 切记：为了能够覆盖默认的 less 变量，这里一定要把后缀名改为 .less
// import { Toast } from 'vant'
// Toast('提示内容')
// 全局注册组件

Vue.component(ArticleItem.name, ArticleItem)
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
