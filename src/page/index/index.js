import App from './App.vue'
import initApp from 'template/page'
import store from 'store'
import TYPES from 'store/types'

store.dispatch(TYPES.GET_USER).then(() => {
  initApp(App)
})
