import Vue from 'vue'
import VueRouter from 'vue-router'
import state from 'store/state'
import routes from './routes'
import { intersection } from 'lodash'
Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: 'history'
})

function hasAccess (router) {
  if (!state.user) {
    return false
  }
  const access = router.meta.access
  if (!access || !access.length) {
    return true
  }
  const userAccess = state.user.access
  if (!userAccess || !userAccess.length) {
    return false
  }
  return !!intersection(access, userAccess).length
}

router.beforeEach((to, from, next) => {
  if (!state.token) { // 登录检测
    window.location.replace('/login')
    return
  }
  if (!hasAccess(to)) {
    alert('没有访问权限')
    return
  }
  next()
})

router.afterEach((to, from) => {
  document.title = to.name
})

export default router
