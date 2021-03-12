import type { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
// app router
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {   path: '/', name: 'root', redirect: '/home'  },
        {
            path: '/home',
            name: 'index',
            component: () => import('./views/home.vue')
        },
        {
            path: '/statistics',
            name: 'statistics',
            component: () => import('./views/statistics.vue')
        },
        { path: '/:path(.*)',  redirect: '/home' },
    ],
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0 }),
});

// config router
export function setupRouter(app: App<Element>) {
    app.use(router);
}

export default router;
