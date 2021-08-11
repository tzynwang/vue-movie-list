import { STORAGE_KEY } from '../../assets/scripts/config'
import { storage } from '../../assets/scripts/storage'
import { filters } from '../../assets/scripts/filters'

const state = {
  movies: [],
  moviesByPage: [],
  paginationArray: [],
  currentState: 'all',
  currentPage: 1,
  moviePerPage: 12,
  movieModal: {},
  userInput: '',
  filterResultLength: -1,
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
}

const getters = {
  getAllMovies: state => state.movies,
  getMoviesByPage: state => state.moviesByPage,
  getMovieModal: state => state.movieModal,
  getGenresMap: state => state.genresMap,
  getCurrentPage: state => state.currentPage,
  getPaginationArray: state => state.paginationArray,
  getCurrentState: state => state.currentState,
  getUserInput: state => state.userInput,
  getFilterResultLength: state => state.filterResultLength,
  getRandomMovie: state => state.movies[Math.floor(Math.random() * state.movies.length)]
}

const actions = {
  async actionGetAllMovies ({ commit }) {
    let response
    try {
      if (!storage.retrieve(STORAGE_KEY) || !storage.retrieve(STORAGE_KEY).length) {
        response = await storage.initial(STORAGE_KEY)
      } else {
        response = storage.retrieve(STORAGE_KEY)
      }
    } catch (error) {
      console.error(error)
    }
    commit('updateAllMovies', response)
  },
  moviesByPage ({ commit }) {
    const filterResult = filters[state.currentState](state.movies, state.userInput)
    commit('updateFilterResultLength', filterResult.length)
    const resultByPage = filterResult.slice(((state.currentPage - 1) * state.moviePerPage), (state.currentPage * state.moviePerPage))
    commit('moviesByPage', resultByPage)
  },
  paginationArray ({ commit }) {
    const filterResult = filters[state.currentState](state.movies, state.userInput)
    const maxPage = Math.ceil(filterResult.length / state.moviePerPage)
    commit('paginationArray', Array.from(Array(maxPage).keys(), pageNumber => ((pageNumber + 1))))
  },
  updateCurrentPage ({ commit }, page) {
    commit('updateCurrentPage', page)
    window.scrollTo(0, 0)
  },
  updateFavorite ({ commit }, id) {
    commit('updateFavorite', id)
  },
  actionGetSingleMovieData ({ commit }, id) {
    commit('updateMovieModalData', id)
  },
  updateCurrentState ({ commit }, page) {
    commit('updateCurrentState', page)
    this.dispatch('moviesByPage')
    this.dispatch('paginationArray')
  },
  updateUserInput ({ commit }, userInput) {
    commit('updateUserInput', userInput)
  }
}

const mutations = {
  updateAllMovies: (state, response) => (state.movies = response),
  moviesByPage: (state, filterResult) => (state.moviesByPage = filterResult),
  paginationArray: (state, paginationArray) => (state.paginationArray = paginationArray),
  updateCurrentPage: (state, page) => (state.currentPage = page.page),
  updateFavorite: (state, id) => {
    state.movies.forEach(movie => {
      if (movie.id === id) {
        movie.favorite = !movie.favorite
      }
    })
  },
  updateMovieModalData: (state, id) => {
    state.movieModal = state.movies.find(movie => movie.id === id)
  },
  updateCurrentState: (state, page) => (state.currentState = page),
  updateUserInput: (state, userInput) => (state.userInput = userInput),
  updateFilterResultLength: (state, filterResultLength) => (state.filterResultLength = filterResultLength)
}

export default {
  state,
  getters,
  actions,
  mutations
}
