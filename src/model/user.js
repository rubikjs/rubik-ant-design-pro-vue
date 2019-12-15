import axios from 'lib/axios'
import { GET_USER, LOGIN } from 'config/api'
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
  return axios.get(GET_USER).then(data => {
    return new User(data)
  })
}

export function login (username, password) {
  return axios.get(LOGIN, {
    params: {
      username,
      password
    }
  }).then((data) => {
    return data
  })
}
