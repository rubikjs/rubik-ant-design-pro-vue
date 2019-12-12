import TYPES from './types'
import Cookies from 'js-cookie'
import { TOKEN_EXPIRES, LOCAL_STORE_LANG } from 'config'

export default {
  [TYPES.SAVE_TOKEN] (state, v) {
    state.token = v
    Cookies.set('token', v, {
      expires: TOKEN_EXPIRES
    })
  },
  [TYPES.REMOVE_TOKEN] (state) {
    state.token = undefined
    Cookies.remove('token')
  },
  [TYPES.CHANGE_LANG] (state, v) {
    state.lang = v
    window.localStorage.setItem(LOCAL_STORE_LANG, v)
  }
}
