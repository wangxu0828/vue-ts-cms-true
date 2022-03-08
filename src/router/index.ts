import { cache } from '@/utils'
import { createRouter, createWebHashHistory } from 'vue-router'

import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/view/login/index.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/view/main/index.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  if (to.path === '/login') {
    const token = cache.getCache('token')
    if (token) {
      console.log(312321)
      return '/'
    }
  }
  if (to.path !== '/login') {
    const token = cache.getCache('token')
    if (!token) {
      console.log(312321)
      return '/login'
    }
  }
})

export default router
