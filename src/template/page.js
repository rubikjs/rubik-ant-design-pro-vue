import 'style/theme.less'
import Vue from 'vue'
import Antd from 'ant-design-vue'
import store from 'store'
import i18n from 'i18n'
import { getLang } from 'lib/lang'
import { ENABLE_I18N } from 'config'
if (ENABLE_I18N) {
  getLang(store.state.lang)
}
Vue.use(Antd)
export default function initApp (App) {
  const app = new Vue({
    store,
    i18n,
    render: h => h(App)
  })
  app.$mount('#app')
}
