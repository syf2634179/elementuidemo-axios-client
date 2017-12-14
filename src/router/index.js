import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld2 from '@/components/HelloWorld2'

Vue.use(Router)

const routerConfig = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/HelloWorld2',
    name: 'HelloWorld2',
    component: HelloWorld2
  }
]

const router = new Router({
  // mode: 'history',
  base: __dirname,
  routes: routerConfig,
  scrollBehavior (to, from, savedPosition) {
  }
})
export default router
