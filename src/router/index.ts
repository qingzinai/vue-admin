import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
// 2. 定义路由配置
const routes = [
  { path: '/login', name: 'login', component: () => import('@/views/login/index.vue') },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    children: [{ path: '/home', name: 'home', component: () => import('@/views/home/index.vue') }]
  }
]
// 3. 创建路由实例
const router = createRouter({
  // 4. 采用hash 模式
  history: createWebHashHistory(),
  // 采用 history 模式
  // history: createWebHistory(),
  routes // short for `routes: routes`
})

export default router
