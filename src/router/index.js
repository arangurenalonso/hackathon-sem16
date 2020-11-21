import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/editar/:idUser',
    name: 'Editar',
    component: () => import('../views/Editar.vue')
  }, 
  
  {
    path: '/crearcontacto',
    name: 'Crearcontacto',
    component: () => import('../views/Crearcontacto.vue')
  }, 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
