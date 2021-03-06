import { createRouter, createWebHistory } from 'vue-router'
import Final from '../views/Final'
import Actions from '../views/Actions'
import Home from '../views/Home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/actions',
    name: 'Actions',
    component: Actions
  },
  {
    path: '/final',
    name: 'Final',
    component: Final
  },
  {
    path: '/:notFind(.*)',
    name: 'notFind',
    component: () => import('../views/NotFind')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
