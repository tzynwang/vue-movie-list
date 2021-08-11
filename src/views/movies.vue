<template>
  <main class="container">
    <h1>All movies</h1>
    <searchBar />
    <!-- search result message -->
    <template>
      <p class="mt-3" v-if="!noMatchResult" v-show="getCurrentState === 'search'">
        The search {{ getFilterResultLength | pluralize }} of '{{
          getUserInput
        }}' ({{ getFilterResultLength }}):
      </p>
      <p class="mt-3" v-else>Sorry, no match result for keyword '{{getUserInput}}'.</p>
    </template>
    <!-- search result message end -->
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
  </main>
</template>

<script>
import { mapGetters } from "vuex";

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
  computed: {
    ...mapGetters([
      "getMoviesByPage",
      "getMovieModal",
      "getCurrentPage",
      "getPaginationArray",
      "getCurrentState",
      "getUserInput",
      "getFilterResultLength",
    ]),
    noMatchResult() {
      return this.getMoviesByPage.length === 0;
    },
  },
  filters: {
    pluralize(resultLength) {
      return resultLength === 1 ? "result" : "results";
    },
  },
};
</script>
