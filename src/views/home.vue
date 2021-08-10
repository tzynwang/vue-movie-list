<template>
  <div>
    <h1 class="text-center">Movie List</h1>
    <h2 class="text-center">The Vue Router and Vuex ver.</h2>
    <div class="poster-container">
      <div class="h1 poster-title">{{randomMovie.title}}</div>
      <img class="mt-5 poster" :src="randomMovie.image">
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'home',
  data() {
    return {
      randomMovie: ''
    }
  },
  methods: {
    ...mapActions(["getMovies", "paginationArray", "moviesByPage"]),
    ...mapGetters(["getRandomMovie"])
  },
  created() {
    this.getMovies();
    this.moviesByPage();
    this.paginationArray();
    this.randomMovie = this.getRandomMovie()
  }
}
</script>

<style>
.poster-container {
  position: relative;
}

.poster-title {
  position: absolute;
  right: 0;
  bottom: 20%;
  z-index: 999;
  width: 100%;

  padding: 1rem 0;

  text-align: center;
  color: rgba(255,255,255,.6);
  background-color: rgba(55, 90, 127, .6);
  transition: .4s;
}

.poster {
  display: block;
  width: 100%;
  height: 60vh;
  object-fit: contain;
  object-position: center center;

  transition: .4s .2s ease-out;
}

.poster-container:hover .poster-title {
  opacity: 0;
}

.poster-container:hover .poster {
  transform: scale(1.05, 1.05) translateY(-2px);
  filter: drop-shadow(0 0 8px rgba(0,0,0,.6));
}
</style>