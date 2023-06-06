import type { RouteRecordRaw } from 'vue-router'

// 根路由
export const ROOT_ROUTE: RouteRecordRaw = {
  path: '/',
  name: 'Login',
  component: () => import('@/pages/login/index.vue')
}

// 404
export const NOT_FOUND_ROUTE: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: () => import('@/layouts/NotFound.vue')
}

export default [
  ROOT_ROUTE,
  NOT_FOUND_ROUTE
]
