import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入vant组件库
import '@/utils/vant'
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
