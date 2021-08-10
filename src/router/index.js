import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import movies from '../views/movies.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    component: home
  },
  {
    path: '/movies',
    name: 'all',
    component: movies
  },
  {
    path: '/favorite',
    name: 'favorite',
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
