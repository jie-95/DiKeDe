const getters = {
  sidebar: (state) => state.app.sidebar,
  device: (state) => state.app.device,
  HrsaasTime: (state) => state.user.HrsaasTime,
  token: (state) => state.user.token
}
export default getters
