import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Formulario from './componentes/Formulario.vue'
import Tabla from './componentes/Tabla.vue'



export const router = new VueRouter({
    mode: 'history',
    routes : [
        {path: '/formulario', component: Formulario},
        {path: '/tabla', component: Tabla},

        
    ]
})