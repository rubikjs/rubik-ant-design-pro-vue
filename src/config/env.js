let CONFIG
switch (MODE) { // eslint-disable-line no-undef
  case 'development':
    CONFIG = {
      API: '/api'
    }
    break
  default:
    CONFIG = {
      API: '//production.api.com'
    }
}
export default CONFIG
