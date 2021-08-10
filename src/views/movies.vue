<template>
  <div>
    <h1>All movies</h1>
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

import movieCard from "../components/movieCard.vue";
import movieModal from "../components/movieModal.vue";
import pagination from "../components/pagination.vue";

export default {
  name: "movies",
  components: {
    movieCard,
    movieModal,
    pagination,
  },
  methods: {
    ...mapActions(["getMovies", "paginationArray", "moviesByPage"]),
  },
  computed: mapGetters([
    "getMoviesByPage",
    "getMovieModal",
    "getCurrentPage",
    "getPaginationArray",
  ])
};
</script>
