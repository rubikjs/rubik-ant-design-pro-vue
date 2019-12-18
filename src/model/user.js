export default class User {
  id
  name = ''
  avatar = ''
  access = []
  constructor (props, ...args) {
    Object.assign(this, props)
  }
}
