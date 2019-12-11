import TYPES from './types'
import Cookies from 'js-cookie'
import { TOKEN_EXPIRES } from 'config/index'

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
  }
}
