import { createRouter, createWebHashHistory } from 'vue-router';
import PageLayout from '../views/page-layout.vue';
import ArticleList from '../views/article-list.vue';
import ArticleDetail from '../views/article-detail.vue';
import PagenotFound from '../views/page-not-found.vue';

// 定义路由
const routes = [
    {
        path: '/',
        component: PageLayout,
        redirect: '/article-list',
        children: [
            {
                path: '/article-list',
                component: ArticleList,
            },
            {
                path: '/article-detail',
                component: ArticleDetail,
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