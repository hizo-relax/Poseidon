import { createRouter, createWebHashHistory } from 'vue-router';
import index from '../views/index.vue';
import search from '../views/search.vue';
import Home from '../views/home.vue';
import formValid from '../views/form-valid.vue';
import customRadio from '../views/custom-radio.vue';
import notFound from '../views/404.vue';

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
                path: '/search',
                component: search,
            },
            {
                path: '/formValid',
                component: formValid,
            },
            {
                path: '/customRadio',
                component: customRadio,
            },
            {
                path: '/:catchAll(.*)',
                component: notFound
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