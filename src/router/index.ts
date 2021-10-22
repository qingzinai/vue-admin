import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/login', name: 'login', component: () => import('@/views/login/index.vue') },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    children: [{ path: '/home', name: 'home', component: () => import('@/views/home/index.vue') }]
  }
]

const router = createRouter({
  history: createWebHistory(),//createWebHashHistory(),
  routes
})

export default router
