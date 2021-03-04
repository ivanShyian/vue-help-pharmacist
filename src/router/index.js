import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/actions',
    name: 'Actions',
    component: () => import('../views/Actions.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
