<template>
  <main class="container">
    <h1 class="text-center">Movie List</h1>
    <h2 class="text-center">The Vue Router and Vuex ver.</h2>
    <div class="poster-container">
      <div class="h1 poster-title">{{ getRandomMovie.title }}</div>
      <img class="mt-5 poster" :src="getRandomMovie.image" />
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "home",
  created() {
    this.actionGetAllMovies();
    this.moviesByPage();
    this.paginationArray();
  },
  methods: {
    ...mapActions(["actionGetAllMovies", "paginationArray", "moviesByPage"]),
  },
  computed: mapGetters(["getRandomMovie"]),
};
</script>

<style lang="scss" scoped>
.poster-container {
  position: relative;

  &:hover .poster-title {
    opacity: 0;
  }

  &:hover .poster {
    transform: scale(1.05, 1.05) translateY(-2px);
    filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.6));
  }
}

.poster-title {
  position: absolute;
  right: 0;
  bottom: 20%;
  z-index: 999;
  width: 50%;

  padding: 1rem 0;

  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  background-color: rgba(55, 90, 127, 0.6);
  transition: 0.4s;
}

.poster {
  display: block;
  width: 100%;
  height: 60vh;
  
  object-fit: contain;
  object-position: center center;

  transition: 0.4s 0.2s ease-out;
}
</style>