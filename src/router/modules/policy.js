import Layout from '@/layout'

export default {
  component: Layout,
  path: '/policy',
  children: [
    {
      path: '',
      component: () => import('@/views/policy'),
      meta: { title: '策略管理' }
    }
  ]
}
