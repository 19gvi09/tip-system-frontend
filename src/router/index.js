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
        path: '/finance',
        name: 'Finance',
        component: () => import(/* webpackChunkName: "finance" */ '../views/Finance.vue')
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
        component: () => import(/* webpackChunkName: "code" */ '../views/Form.vue')
    },
    {
        path: '/register/:type',
        name: 'Register',
        component: () => import(/* webpackChunkName: "code" */ '../views/Form.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
