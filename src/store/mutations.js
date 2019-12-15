import TYPES from './types'
import Cookies from 'js-cookie'
import { TOKEN_EXPIRES, LOCAL_STORE_LANG } from 'config'

export default {
  [TYPES.SAVE_TOKEN] (state, {
    token,
    remember = true
  } = {}) {
    state.token = token
    Cookies.set('token', token, {
      expires: remember ? TOKEN_EXPIRES : undefined
    })
  },
  [TYPES.REMOVE_TOKEN] (state) {
    state.token = undefined
    Cookies.remove('token')
  },
  [TYPES.CHANGE_LANG] (state, v) {
    state.lang = v
    window.localStorage.setItem(LOCAL_STORE_LANG, v)
  },
  [TYPES.GET_USER] (state, v) {
    state.user = v
  }
}
