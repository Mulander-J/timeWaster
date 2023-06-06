import NProgress from 'nprogress' // progress bar
import type { Router } from 'vue-router'
import { setupPermissionGuard } from './permission'

function setupProgressGuard(router: Router) {
  router.beforeEach(() => {
    NProgress.start()
  })
  router.afterEach(() => {
    NProgress.done()
  })
}

export default function createRouterGuard(router: Router) {
  setupProgressGuard(router)
  setupPermissionGuard(router)
}
