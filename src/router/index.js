import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import PageAnother from '@/components/PageAnother'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Welcome',
        component: Welcome
    }, {
        path: '/another',
        name: 'PageAnother',
        component: PageAnother
    }]
})