import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    component: home
  },
  {
    path: '/movies',
    name: 'All movies',
    component: () => import('../views/movies.vue')
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: () => import('../views/favorites.vue')
  },
  {
    path: '*',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  routes,
  linkExactActiveClass: 'active'
})

export default router
