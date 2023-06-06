import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress' // progress bar
import { appRoutes } from './routes'
import createRouterGuard from './guard'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const router = createRouter({
  history: createWebHistory(),
  routes: appRoutes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

createRouterGuard(router)

export default router
