import 'ant-design-vue/dist/antd.css'
import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './app.vue'

Vue.use(Antd)
const app = new Vue({
  render: h => h(App)
})
app.$mount('#app')
