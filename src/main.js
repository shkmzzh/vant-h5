import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/utils/vant'
// 切记：为了能够覆盖默认的 less 变量，这里一定要把后缀名改为 .less

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
