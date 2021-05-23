import axios from 'axios'

const api = axios.create({
  baseURL: 'https://eorganico-manager-v2.herokuapp.com'
})

export { api }
