import { createRouter, createWebHashHistory } from "vue-router";
import Domus from "../Paginae/domus/Domus.vue";
import Batman from "../Paginae/batman/Batman.vue";
import Simpsons from "../Paginae/simpsons/Simpsons.vue";
import Responsum from "../Paginae/responsum/Responsum.vue";



export const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Domus
        },
        {
            path: '/batman',
            name: 'batman',
            component: Batman
        },
       {
        path: '/simpsons',
        name: 'simpsons',
        component: Simpsons
       },
       {
        path: '/Indecision',
        name: 'Indecision',
        component: Responsum
       },
       {
        path: '/:pathMatch(.*)*',
        redirect: '/'
       }
    ]
})
    
