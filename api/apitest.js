import axios from 'axios'

const baseURL = 'https://jsonplaceholder.typicode.com/'
const url = 'https://jsonplaceholder.typicode.com/posts'


function createInstance() {
  const instance = axios.create({
    baseURL,
    timeout: 40000,
  })
  return instance
}

export default class PostApi {
  static api = createInstance()
  static url = url
}
