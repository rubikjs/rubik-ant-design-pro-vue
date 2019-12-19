import Cookies from 'js-cookie'
import { LOCAL_STORE_LANG } from 'config'
export default {
  token: Cookies.get('token'),
  user: {},
  lang: window.localStorage.getItem(LOCAL_STORE_LANG) || window.navigator.language,
  theme: 'dark'
}
