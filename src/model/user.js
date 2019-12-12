export default class User {
  id
  name
  avatar

  constructor ({
                 id = undefined,
                 name = '',
                 avatar = '',
               } = {}) {
    this.id = id
    this.name = name
    this.avatar = avatar
  }
}
