const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/pages/home')
  },
  {
    name: 'form',
    path: '/form',
    component: () => import('@/pages/form')
  }
]

export default routes