import { login } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'

export default {
  namespaced: true,
  state: {
    token: getToken(),
    HrsaasTime: '',
    userInfo: {}
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      setToken(token)
    },
    removeToken(state) {
      state.token = null
      removeToken()
    },
    setHrsaasTime(state, time) {
      state.HrsaasTime = time
    }
  },
  actions: {
    // 通过接口获取token
    async login({ commit }, data) {
      // console.log(data)
      try {
        const res = await login(data)
        console.log(res.data.token)
        if (res.data.success) {
          commit('setToken', res.data.token)
          commit('setHrsaasTime', +new Date())
        } else {
          return new Error('验证码错误')
        }
      } catch (error) {
        console.log(error)
      }
    },
    logout({ commit }) {
      commit('removeToken')
    }
  }
}
// export default {
//   namespaced: true,
//   state: {
//     token: getToken()
//   },
//   mutation: {
//     setToken(state, token) {
//       state.token = token
//       setToken(token)
//     }
//   },
//   actions: {
//     async login({ commit }, data) {
//       const res = await login(data)
//       console.log(res)
//       commit('setToken', res)
//     }
//   }
// }
