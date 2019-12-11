import Vue from 'vue'
import VueRouter from 'vue-router'
import state from 'store/state'
import routes from './routes'
Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (!state.token) { // 登录检测
    // window.location.replace('/login')
    // return
  }
  next()
})

router.afterEach((to, from) => {
  document.title = to.name
})

export default router
