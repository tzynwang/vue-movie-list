import axios from 'axios'
import { INDEX_URL, POSTER_URL } from './config.js'

export const storage = {
  async initial (localStorageKey) {
    const response = await axios.get(INDEX_URL)
    const movies = response.data.results.map(movie => ({
      ...movie,
      image: POSTER_URL + movie.image,
      favorite: false
    }))
    window.localStorage.setItem(localStorageKey, JSON.stringify(movies))
    return this.retrieve(localStorageKey)
  },
  update (localStorageKey, data) {
    window.localStorage.setItem(localStorageKey, JSON.stringify(data))
  },
  retrieve (localStorageKey) {
    return JSON.parse(window.localStorage.getItem(localStorageKey))
  }
}
