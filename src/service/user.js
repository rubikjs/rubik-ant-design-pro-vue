import axios from 'lib/axios'
import { GET_USER, LOGIN } from 'config/api'
import User from 'model/user'

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
