import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/user-service/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
// =======================================================================
/**
 * 验证码
 * @param {*} n
 * @returns
 */
export function getCode(n) {
  return request({
    url: '/api/user-service/user/imageCode/' + n,
    method: 'GET'
  })
}
