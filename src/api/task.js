import request from '@/utils/request'

export function getAllTaskStatus() {
  return request({
    url: '/api/task-service/task/allTaskStatus',
    method: 'get'
  })
}
