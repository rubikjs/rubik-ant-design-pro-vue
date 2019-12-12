import Cookies from 'js-cookie'

export default {
  token: Cookies.get('token'),
  user: {
    name: 'Fancy',
    avatar: 'https://avatars0.githubusercontent.com/u/1636927?s=40&v=4'
  }
}
