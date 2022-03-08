import router from '@/router'
import type { RouteRecordRaw } from 'vue-router'
const mapMenuToRoute = (userMenus: any[]) => {
  const res = require.context('@/router/main', true, /\.ts$/)

  const routes: RouteRecordRaw[] = []
  res.keys().forEach((item) => {
    const route = require('@/router/main' + item.split('.')[1])
    routes.push(route.default)
  })

  const userRoutes: RouteRecordRaw[] = []
  const findMenuToRoute = (userMenus: any[]): RouteRecordRaw[] => {
    for (const item of userMenus) {
      if (item.type === 1) {
        findMenuToRoute(item.children)
      }
      if (item.type === 2) {
        for (const iterator of routes) {
          if (iterator.path === item.url) {
            userRoutes.push(iterator)
          }
        }
      }
    }
    return userRoutes
  }

  findMenuToRoute(userMenus)
  userRoutes.forEach((route) => {
    router.addRoute('main', route)
  })
}

export default mapMenuToRoute
