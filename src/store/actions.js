import { login, logout, thirdLogin, getInitInfo } from 'model/user'
import { getCategoryList } from 'model/note'
import TYPES from './types'

export default {
  [TYPES.GET_CATEGORIES] ({ commit }) {
    return getCategoryList().then(({ list }) => {
      commit(TYPES.GET_CATEGORIES, list)
    })
  },
  [TYPES.GET_USER] ({ commit }) {
    return getInitInfo().then(({ user }) => {
      commit(TYPES.GET_USER, user)
    })
  },
  [TYPES.LOGIN] ({ commit }, args) {
    return login(args).then(({ userId, token }) => {
      commit(TYPES.SAVE_TOKEN, token)
    })
  },
  [TYPES.THIRD_LOGIN] ({ commit }, args) {
    return thirdLogin(args).then(({ userId, token }) => {
      commit(TYPES.SAVE_TOKEN, token)
    })
  },
  [TYPES.LOGOUT] ({ commit }) {
    return logout().then(() => {
      commit(TYPES.REMOVE_TOKEN)
    })
  }
}
