import 'style/theme.less'
import Vue from 'vue'
import Antd from 'ant-design-vue'
import store from 'store/index'
Vue.use(Antd)
export default function initApp (App) {
  const app = new Vue({
    store,
    render: h => h(App)
  })
  app.$mount('#app')
}
