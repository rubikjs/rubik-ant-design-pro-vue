import axios from 'lib/axios'
import { GET_USER } from 'config/api'
export default class User {
  id
  name
  avatar
  access
  constructor ({
    id = undefined,
    name = '',
    avatar = '',
    access = []
  } = {}) {
    this.id = id
    this.name = name
    this.avatar = avatar
    this.access = access
  }
}

export function getUser () {
  return axios.get(GET_USER).then(res => {
    return new User(res.data)
  })
}
