<template>
  <div>
    <h1>All movies</h1>
    <searchBar />
    <!-- search result message -->
    <p class="mt-3" v-show="getCurrentState === 'search'">
      The search results of '{{ getUserInput }}':
    </p>
    <p class="mt-3" v-show="noMatchResult">
      Sorry, no match result.
    </p>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 mt-3">
      <movieCard
        v-for="movie in getMoviesByPage"
        :key="movie.id"
        :movie-data-from-parent="movie"
      />
    </div>
    <movieModal :movie-modal-data-from-parent="getMovieModal" />
    <pagination
      :current-page-from-parent="getCurrentPage"
      :pagination-array-from-parent="getPaginationArray"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import searchBar from "../components/searchBar.vue";
import movieCard from "../components/movieCard.vue";
import movieModal from "../components/movieModal.vue";
import pagination from "../components/pagination.vue";

export default {
  name: "movies",
  components: {
    searchBar,
    movieCard,
    movieModal,
    pagination,
  },
  methods: {
    ...mapActions(["getMovies", "paginationArray", "moviesByPage"]),
  },
  computed: {
    ...mapGetters([
      "getMoviesByPage",
      "getMovieModal",
      "getCurrentPage",
      "getPaginationArray",
      "getCurrentState",
      "getUserInput",
    ]),
    noMatchResult() {
      return this.getMoviesByPage.length === 0;
    },
  },
};
</script>
