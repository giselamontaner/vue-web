import { createRouter, createWebHashHistory } from "vue-router";
import Domus from "../Paginae/domus/Domus.vue";
import Batman from "../Paginae/batman/Batman.vue";
import Primus from "../Paginae/simpsons/Primus.vue";
import Responsum from "../Paginae/responsum/Responsum.vue";
import Layout from "@/Paginae/simpsons/Layout.vue";
import Circa from "@/Paginae/simpsons/Circa.vue";
import Collectione from "@/Paginae/simpsons/Collectione.vue";
import Character from "@/Paginae/simpsons/Character.vue";



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
        children: [
            {
              path: '',
              name: 'simpsons',
              component:Primus
            },
            {
              path: 'about',
              component:Layout,
              children: [
                {
                    path: '',
                    name: 'simpsons-about',
                    component:Circa
                }
              ]
            },
             {
              path: '',
              name: 'simpsons',
              component:Primus
            },
            {
              path: 'Gallery',
              component:Layout,
              children: [
                {
                    path: '',
                    name: 'simpsons-characters',
                    component:Collectione
                },
                {
                    path: ':id',
                    name: 'simpsons-characters',
                    component: Character
                }
              ]
            }
        ]
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
    
