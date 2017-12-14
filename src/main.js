// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import HelloWorld2 from '@/components/HelloWorld2'
import router from './router/index'
import store from './vuex/store'

Vue.config.productionTip = false// 在启动时生成生产提示

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(HelloWorld2)
})

new Vue({
  el: '#app2',
  router,
  store,
  render: h => h(App)
})
