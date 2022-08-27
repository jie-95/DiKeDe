import axios from 'axios'
import router from '@/router'
import store from '@/store'
import { Message } from 'element-ui'

// 判断超时
const timeout = 3600
function isCheckOut() {
  return (Date.now() - store.getters.HrsaasTime) / 1000 > timeout
}
// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // console.log(config)
    if (store.getters.token) {
      // console.log('======', isCheckOut())
      if (isCheckOut()) {
        store.dispatch('user/logout')
        router.push('/login')
        Message.error('接口超时')
        return Promise.reject(new Error('接口超时'))
      }
      config.headers['Authorization'] = `${store.getters.token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  (response) => {
    return response
  //   const { data } = response
  //   // console.log(response)
  //   if (response.status === 200) {
  //     Message.success(data.msg)
  //     return data
  //   } else {
  //     Message.error(data.msg)
  //     return Promise.reject(new Error(data.msg))
  //   }
  },
  (err) => {
    if (err.response && err.response.data && err.response.data.code === 10002) {
      store.dispatch('user/logout')
      router.push('/login')
    }
    // Message.error(err.msg || '')
    return Promise.reject(err)
  }
)

export default service
