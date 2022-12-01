import {createRouter, createWebHashHistory} from 'vue-router'
import HomePage from "./pages/HomePage.vue"
import PortfolioPage from "./pages/PortfolioPage.vue"



export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/home', component: HomePage, alias: '/'},
        {path: '/portfolio', component: PortfolioPage}

    ]
})