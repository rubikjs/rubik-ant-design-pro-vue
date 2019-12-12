import axios from 'axios'
import CONFIG from 'config/env'
import { UNAUTHORIZED } from '../config/code'
import store from 'store/index'
import TYPES from 'store/types'

axios.defaults.withCredentials = true
axios.defaults.baseURL = CONFIG.API
axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})
axios.interceptors.response.use(
  res => {
    return res
  },
  error => {
    if (error.response.status === UNAUTHORIZED) {
      handleTokenInvalid()
    }
    return Promise.reject(error)
  }
)

function handleTokenInvalid () {
  store.commit(TYPES.REMOVE_TOKEN)
  window.location.replace('/login')
}

export default axios
