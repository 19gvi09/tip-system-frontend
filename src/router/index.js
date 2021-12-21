import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/lk',
        name: 'LK',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "lk" */ '../views/LK.vue')
    },
    {
        path: '/lk/history',
        name: 'History',
        component: () => import(/* webpackChunkName: "finance" */ '../views/History.vue')
    },
    {
        path: '/faq',
        name: 'Faq',
        component: () => import(/* webpackChunkName: "faq" */ '../views/Faq.vue')
    },
    {
        path: '/qr',
        name: 'qr',
        component: () => import(/* webpackChunkName: "qr" */ '../views/QR.vue')
    },
    {
        path: '/qr/:id',
        name: 'Code',
        component: () => import(/* webpackChunkName: "code" */ '../views/Code.vue')
    },
    {
        path: '/auth',
        name: 'Auth',
        component: () => import(/* webpackChunkName: "auth" */ '../views/Form.vue')
    },
    {
        path: '/register/:type',
        name: 'Register',
        component: () => import(/* webpackChunkName: "register" */ '../views/Form.vue')
    },
    {
        path: '/documents',
        name: 'Documents',
        component: () => import(/* webpackChunkName: "documents" */ '../views/Links.vue'),
        props: {
            name: "Документация",
            links: [
                {
                    name: "Требования к сайту"
                },
                {
                    name: "54-ФЗ"
                },
                {
                    name: "Договор на прием карт"
                },
                {
                    name: "Договор на фискализацию"
                },
                {
                    name: "Договор конфиденциальности"
                },
                {
                    name: "Политика конфиденциальности"
                },
                {
                    name: "Реквизиты"
                },
                {
                    name: "Как подключиться"
                },
                {
                    name: "Условия пользования"
                },
            ]
        }
    },
    {
        path: '/products',
        name: 'Products',
        component: () => import(/* webpackChunkName: "products" */ '../views/Links.vue'),
        props: {
            name: "Наши продукты",
            links: [
                {
                    name: "Торговый эквайринг"
                },
                {
                    name: "Интернет-эквайринг"
                },
            ]
        }
    },
    {
        path: '/support',
        name: 'Support',
        component: () => import(/* webpackChunkName: "support" */ '../views/Support.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
