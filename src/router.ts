import type { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
export const routes = [
  {
    path: '/home',
    name: 'index',
    component: () => import('#/home.vue'),
    meta: { title: 'Home' },
  },
  {
    path: '/statistics',
    name: 'statistics',
    component: () => import('#/statistics.vue'),
    meta: { title: 'Statistics' },
  },
];
// app router
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'root', redirect: '/home' },
    ...routes,
    { path: '/:path(.*)', redirect: '/home' },
  ],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

// config router
export function setupRouter(app: App<Element>) {
  app.use(router);
}

export default router;
