const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/pages/home')
  },
  {
    name: 'prop-event-slot',
    path: '/prop-event-slot',
    component: () => import('@/pages/prop-event-slot')
  }
]

export default routes