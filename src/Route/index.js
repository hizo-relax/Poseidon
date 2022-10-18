import { createRouter, createWebHashHistory } from 'vue-router';
import index from '../views/index.vue';
import i18n from '../views/i18n.vue';
import search from '../views/search.vue';
import tree from '../views/tree.vue';
import formValid from '../views/form-valid.vue';
import customRadio from '../views/custom-radio.vue';
import notFound from '../views/404.vue';
import table from '../views/table.vue';
import Login from '../views/login.vue';

// 定义路由
const routes = [
    {
        path: '/',
        component: index,
        children: [
            {
                path: '/i18n',
                component: i18n,
            },
            {
                path: '/search',
                component: search,
            },
            {
                path: '/tree',
                component: tree,
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
                path: '/table',
                component: table,
            },
            {
                path: '/:catchAll(.*)',
                component: notFound
            }
        ]
    },
    {
        path: '/login',
        component: Login,
    }
];

// 创建路由实例并传递 `routes` 配置
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

// 定义一个任何时候都可以访问的路由
const anyRoutes = ['/login', 'register', '/home', '/index', '/i18n'];

router.beforeEach((to, from, next) => {
    const isLogin = sessionStorage.getItem('token');
    if (anyRoutes.includes(to.path) || isLogin) {
        next();
    } else {
        next('/login');
    }
});

export default router;