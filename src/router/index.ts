import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/login', name: 'login', component: () => import('@/views/login/index.vue') },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    children: [
      { path: '/home', name: 'home', component: () => import('@/views/home/index.vue') },
      { path: '/page1', name: 'page1', component: () => import('@/views/page1/index.vue') },
      { path: '/page2', name: 'page2', component: () => import('@/views/page2/index.vue') }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(), //createWebHashHistory(),
  routes
})

export default router
