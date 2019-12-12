import Vue from 'vue'
import VueI18n from 'vue-i18n'
import state from 'store/state'
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: state.lang,
  fallbackLocale: 'zh-CN'
})
export default i18n
