import TYPES from './types'
import { getUser } from 'service/user'

export default {
  [TYPES.GET_USER] ({ commit }) {
    return getUser().then((user) => {
      commit(TYPES.GET_USER, user)
    })
  }
}
