import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Login from '@/components/Login'
import PageWelcome from '@/components/PageWelcome'
import PageAnother from '@/components/PageAnother'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', redirect: '/home' },
        {
            path: '/home',
            component: Home,
            children: [
                { path: '/home', redirect: '/home/welcome' },
                { path: '/home/welcome', component: PageWelcome },
                { path: '/home/another', component: PageAnother },
            ]
        }, {
            path: '/login',
            component: Login
        }
    ]
})