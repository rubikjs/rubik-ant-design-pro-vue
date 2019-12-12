import TYPES from './types'
import { getUser } from '../model/user'

export default {
  [TYPES.GET_USER] ({ commit }) {
    return getUser().then((user) => {
      commit(TYPES.GET_USER, user)
    })
  }
}
