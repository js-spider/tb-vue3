

export default [
    { path: '/', redirect: '/home' },
    {
        path: '/home',
        component: ()=>import('@/pages/home/index.vue'),
        meta:{}
    },
    {
        path: '/store',
        component: ()=>import('@/pages/store/index.vue'),
        meta:{}
    },
]