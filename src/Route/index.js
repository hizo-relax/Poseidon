import { createRouter, createWebHashHistory } from 'vue-router';
import index from '../views/index.vue';
import Home from '../views/home.vue';
import Detail from '../views/detail.vue';
import PagenotFound from '../views/page-not-found.vue';

// 定义路由
const routes = [
    {
        path: '/',
        component: index,
		redirect: '/home',
        children: [
            {
                path: '/home',
                component: Home,
            },
			{
                path: '/detail',
                component: Detail,
            },
            {
                path: '/:catchAll(.*)',
                component: PagenotFound
            }
        ]
    },
];

// 创建路由实例并传递 `routes` 配置
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;