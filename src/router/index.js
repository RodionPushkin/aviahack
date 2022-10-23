import {createRouter, createWebHistory} from 'vue-router'
import api from "@/api/index.js";

const authGuard = async (to, from, next) => {
    let isAuthorized
    let auth = await api.get(`user?token=${localStorage.getItem('token')}`).then(r => r)
    if (auth.length > 0) {
        isAuthorized = true
    } else {
        isAuthorized = false
    }
    if (isAuthorized) {
        if (to.path == "/auth") {
            next({path: "/panel"})
        } else {
            next()
        }
    } else {
        if (to.path == "/auth") {
            next()
        } else if (to.path == "/panel") {
            next({path: "/auth"})
        }
    }
};
const routes = [
    {
        path: '/',
        name: 'главная',
        component: () => import('../views/home/index.vue')
    },
    {
        path: '/auth',
        name: 'вход',
        beforeEnter: authGuard,
        component: () => import('../views/auth/index.vue')
    },
    {
        path: '/panel',
        name: 'панель',
        beforeEnter: authGuard,
        component: () => import('../views/panel/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
