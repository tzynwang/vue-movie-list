import Vuex from 'vuex'
import Vue from 'vue'
import movies from './modules/movies'

import { storage } from '../assets/scripts/storage'
import { STORAGE_KEY } from '../assets/scripts/config'

// Load Vuex
Vue.use(Vuex)

// Create store
const store = new Vuex.Store({
  modules: {
    movies
  }
})

store.watch((state) => state.movies, (state) => {
  storage.update(STORAGE_KEY, state.movies)
}, { deep: true })

export default store
