import axios from 'axios'

import { BASE_URL, TIMEOUT } from './config'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})
// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default instance
