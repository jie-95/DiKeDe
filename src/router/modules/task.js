// import Layout from '@/layout'

// export default {
//   path: '/task',
//   component: Layout,
//   children: [
//     {
//       path: '',
//       component: () => import('@/views/task'),
//       meta: { title: '工单管理' }
//     }
//   ]
// }
import Layout from '@/layout'

export default {
  path: '/task',
  component: Layout,
  meta: { title: '工单管理' },
  children: [
    {
      path: 'business',
      component: () => import('@/views/task/business'),
      meta: { title: '运营工单' }
    },
    {
      path: 'operation',
      component: () => import('@/views/task/operation'),
      meta: { title: '运维工单' }
    }
  ]
}
