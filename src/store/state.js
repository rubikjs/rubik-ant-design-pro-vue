import Cookies from 'js-cookie'
import { LOCAL_STORE_LANG } from 'config'
export default {
  token: Cookies.get('token'),
  user: {
    name: 'Fancy',
    avatar: 'https://avatars0.githubusercontent.com/u/1636927?s=40&v=4'
  },
  lang: window.localStorage.getItem(LOCAL_STORE_LANG) || window.navigator.language
}
