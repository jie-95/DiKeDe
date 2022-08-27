import request from '@/utils/request'

export function getTaskList(params) {
  return request({
    url: '/api/task-service/task/search',
    method: 'GET',
    params
  })
}
