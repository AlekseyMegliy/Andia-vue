import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/HomePage'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: Home 
    },
    {
        path: '/portfolio',
        component: () => import('@/pages/PortfolioPage.vue')
    }

    ]
})