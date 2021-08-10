<template>
  <div
    class="modal fade"
    id="movieModal"
    tabindex="-1"
    aria-labelledby="movieModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <p class="modal-title h5" id="movieModalLabel">
            {{ movieModal.title }}
          </p>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div
          class="
            modal-body
            movie-detail-modal-body
            d-flex
            flex-column
            justify-content-end
          "
          :style="{
            backgroundImage:
              'linear-gradient(rgba(48, 48, 48, 0.4), rgba(48, 48, 48, 0.4)), url(' +
              movieModal.image +
              ')',
          }"
        >
          <p class="movie-description">{{ movieModal.description }}</p>
        </div>
        <div class="modal-footer justify-content-between">
          <div class="badges">
            <span
              v-for="genres in movieModal.genres"
              :key="'genres' + genres"
              class="badge bg-primary me-2"
            >
              {{ getGenresMap[genres] }}
            </span>
          </div>
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "movieModal",
  props: {
    movieModalDataFromParent: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["getGenresMap"]),
    movieModal () {
      return this.movieModalDataFromParent
    }
  }
};
</script>

<style>
</style>