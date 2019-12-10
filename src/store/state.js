import Cookies from 'js-cookie'

export default {
  token: Cookies.get('token'),
  user: null
}
