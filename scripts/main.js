import { STORAGE_KEY } from './config.js'
import { storage } from './storage.js'
import { filters } from './filters.js'

const app = new Vue({
  el: '#app',
  data: {
    pages: ['home', 'favorite'],
    movies: [],
    currentState: 'home',
    currentPage: 1,
    moviePerPage: 12,
    movieModal: {},
    userInput: '',
    genresMap: {
      1: 'Action',
      2: 'Adventure',
      3: 'Animation',
      4: 'Comedy',
      5: 'Crime',
      6: 'Documentary',
      7: 'Drama',
      8: 'Family',
      9: 'Fantasy',
      10: 'History',
      11: 'Horror',
      12: 'Music',
      13: 'Mystery',
      14: 'Romance',
      15: 'Science Fiction',
      16: 'TV Movie',
      17: 'Thriller',
      18: 'War',
      19: 'Western'
    }
  },
  async created () {
    if (!storage.retrieve(STORAGE_KEY)) {
      this.movies = await storage.initial(STORAGE_KEY)
    } else {
      this.movies = storage.retrieve(STORAGE_KEY)
    }
  },
  methods: {
    updateCurrentPage (page) {
      this.currentPage = page
      window.scrollTo(0, 0)
    },
    getMovieDetail (id) {
      const movie = this.movies.filter(movie => movie.id === id)
      this.movieModal = movie[0]
    },
    addFavorite (id) {
      this.movies.forEach(movie => {
        if (movie.id === id) {
          if (movie.favorite) {
            movie.favorite = false
          } else {
            movie.favorite = true
          }
        }
      })
    },
    getRawInput () {
      const rawInput = document.querySelector('#userInput').value.trim()
      if (rawInput) this.userInput = rawInput
    },
    updateAppState (state) {
      if (state === 'search' && !this.userInput) return
      if (this.currentState !== state) {
        this.currentState = state
        this.currentPage = 1
      }
    },
    leaveSearch () {
      document.querySelector('#userInput').value = ''
      this.userInput = ''
      this.currentState = 'home'
    }
  },
  computed: {
    paginationArray () {
      const filterResult = filters[this.currentState](this.movies, this.userInput)
      const maxPage = Math.ceil(filterResult.length / this.moviePerPage)
      return Array.from(Array(maxPage).keys(), pageNumber => ((pageNumber + 1)))
    },
    moviesByPage () {
      const filterResult = filters[this.currentState](this.movies, this.userInput)
      return filterResult.slice(((this.currentPage - 1) * this.moviePerPage), (this.currentPage * this.moviePerPage))
    },
    noMatchResult () {
      return this.moviesByPage.length === 0
    },
    searchResultQty () {
      const filterResult = filters[this.currentState](this.movies, this.userInput)
      return filterResult.length
    },
    noResultMessage () {
      switch (this.currentState) {
        case 'favorite':
          return 'Haven\'t added any favorite movie yet.'
        default:
          return 'No match results.'
      }
    }
  },
  watch: {
    movies: {
      handler: function () {
        storage.update(STORAGE_KEY, this.movies)
      },
      deep: true
    }
  }
})
