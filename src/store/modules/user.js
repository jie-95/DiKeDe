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
        console.log(res)
        if (res.success) {
          commit('setToken', res)
          commit('setHrsaasTime', +new Date())
        } else {
          console.log(res.msg)
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
