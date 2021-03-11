import type { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
// app router
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {   path: '/', name: 'root', redirect: '/time'  },
        {
            path: '/time',
            name: 'Index',
            component: () => import('./views/index/index.vue')
        },
        {
            path: '/statistics',
            name: 'Statistics',
            component: () => import('./views/statistics/index.vue')
        },
        { path: '/:path(.*)',  redirect: '/time' },
    ],
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0 }),
});

// config router
export function setupRouter(app: App<Element>) {
    app.use(router);
}

export default router;
