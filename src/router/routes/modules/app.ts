import type { RouteRecordRaw } from 'vue-router'

const ROOT_APP: RouteRecordRaw = {
    path: '/app',
    name: 'Chat',
    component: () => import('@/pages/app/index.vue'),
    children: [
        {
            path: '',
            name: 'Launch',
            component: () => import('@/pages/app/Channel.vue'),
        },
        {
            path: ':id',
            name: 'Channel',
            component: () => import('@/pages/app/Channel.vue'),
        }
    ]
}

export default ROOT_APP