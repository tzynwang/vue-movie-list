<template>
  <div>
    <h1>Favirote movies</h1>
    <div v-if="getMoviesByPage.length" class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 mt-3">
      <movieCard
        v-for="movie in getMoviesByPage"
        :key="movie.id"
        :movie-data-from-parent="movie"
      />
    </div>
    <div v-else>
      Have no favorited movie(s) yet.
    </div>
    <movieModal :movie-modal-data-from-parent="getMovieModal" />
    <pagination
    :current-page-from-parent="getCurrentPage"
    :pagination-array-from-parent="getPaginationArray" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import movieCard from "../components/movieCard.vue";
import movieModal from "../components/movieModal.vue"
import pagination from "../components/pagination.vue";

export default {
  name: 'favirotes',
  components: {
    movieCard,
    movieModal,
    pagination
  },
  methods: {
    ...mapActions(["getMovies", "paginationArray", "moviesByPage", "updateCurrentState"]),
    updateCurrentPage(page) {
      this.updateCurrentState(page);
    },
  },
  computed: mapGetters(["getMoviesByPage", "getCurrentPage", "getMovieModal", "getPaginationArray"]),
  created() {
    this.updateCurrentState('favorite')
    this.getMovies();
    this.moviesByPage();
    this.paginationArray();
  },
}
</script>
