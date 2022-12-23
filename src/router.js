import {createRouter, createWebHashHistory} from 'vue-router'
import HomePage from "./pages/HomePage.vue"
import PortfolioPage from "./pages/PortfolioPage.vue"
import ServicesPage from "@/pages/ServicesPage.vue"
import AboutPage from "@/pages/AboutPage.vue"
import ContactPage from "@/pages/ContactPage.vue"



export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/home', component: HomePage, alias: '/'},
        {path: '/portfolio', component: PortfolioPage},
        {path: '/services', component: ServicesPage},
        {path: '/about', component: AboutPage},
        {path: '/contact', component: ContactPage}

    ]
})