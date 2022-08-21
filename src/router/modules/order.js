import Layout from '@/layout'

export default {
  path: '/order',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/order'),
      meta: { title: '订单管理' }
    }
  ]
}
// import Layout from '@/layout'

// export default {
//   component: Layout,
//   path: '/policy',
//   children: [
//     {
//       path: '',
//       component: () => import('@/views/policy'),
//       meta: { title: '策略管理' }
//     }
//   ]
// }
