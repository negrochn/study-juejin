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
  },
  {
    name: 'provide-inject',
    path: '/provide-inject',
    component: () => import('@/pages/provide-inject')
  },
  {
    name: 'dispatch-broadcast',
    path: '/dispatch-broadcast',
    component: () => import('@/pages/dispatch-broadcast')
  },
  {
    name: 'form',
    path: '/form',
    component: () => import('@/pages/form')
  },
  {
    name: 'checkbox',
    path: '/checkbox',
    component: () => import('@/pages/checkbox')
  },
  {
    name: 'display',
    path: '/display',
    component: () => import('@/pages/display')
  }
]

export default routes