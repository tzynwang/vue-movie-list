<template>
  <div class="col">
    <div class="card" :style="{ backgroundImage: 'url(' + movie.image + ')' }">
      <div
        class="
          card-body
          d-flex
          flex-column
          justify-content-end
          align-items-center
          movie-card-body
        "
      >
        <span class="d-flex flex-column">
          <input
            type="checkbox"
            class="hide-input"
            :id="movie.id"
            @change="addFavorite(movie.id)"
            :checked="movie.favorite"
            :value="movie.id"
          />
          <label :for="movie.id">
            <i
              class="bi"
              :class="{
                'bi-star-fill': movie.favorite,
                'bi-star': !movie.favorite,
              }"
            ></i>
          </label>
          <i
            class="bi bi-three-dots-vertical"
            @click="getSingleMovieData(movie.id)"
            data-bs-toggle="modal"
            data-bs-target="#movieModal"
          ></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "movieCard",
  props: {
    movieDataFromParent: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      movie: this.movieDataFromParent,
    };
  },
  methods: {
    ...mapActions(["updateFavorite", "actionGetSingleMovieData"]),
    addFavorite(movieId) {
      this.updateFavorite(movieId);
    },
    getSingleMovieData(movieId) {
      this.actionGetSingleMovieData(movieId);
    },
  },
};
</script>

<style>
</style>