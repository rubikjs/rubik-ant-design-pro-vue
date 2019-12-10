let CONFIG
switch (MODE) { // eslint-disable-line no-undef
  case 'development':
    CONFIG = {
      API: '//10.0.3.233:8082'
    }
    break
  default:
    CONFIG = {
      API: '//api.apphinow.com'
    }
}
export default CONFIG
