import type { Router } from 'vue-router'
import { userToken } from '@/utils/storage'

const WHITE_PATHS = ['/']
const PERMISSION_PATHS = ['/app']

export function setupPermissionGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const isLogin = !!userToken.value
    if (WHITE_PATHS.includes(to.path)) {
        isLogin ? next('/app') : next()
    } else if (PERMISSION_PATHS.includes(to.path)) {
        isLogin ? next() : next('/')
    } else {
      next()
    }
  })
}
