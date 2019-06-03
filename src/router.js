import Vue from 'vue'
import Router from 'vue-router'

import Page404 from '@/components/Page404'
import Page500 from '@/components/Page500'

import Login from '@/components/Login'
import Register from '@/components/Register'

import Home from '@/components/Home'
import PageWelcome from '@/components/PageWelcome'
import PageAnother from '@/components/PageAnother'

Vue.use(Router)

export default new Router({
    routes: [
        { path: "*", redirect: "/404" },
        { path: '/404', component: Page404 },
        { path: '/500', component: Page500 },
        { path: '/login', component: Login },
        { path: '/register', component: Register },
        { path: '/', redirect: '/home' },
        {
            path: '/home',
            component: Home,
            children: [
                { path: '/home', redirect: '/home/welcome' },
                { path: '/home/welcome', component: PageWelcome },
                { path: '/home/another', component: PageAnother },
            ]
        }
    ]
})