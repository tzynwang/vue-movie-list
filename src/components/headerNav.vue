<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/vue-movie-list"
        >Movie List (Vue Router, Vuex)</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li
            class="nav-item"
            v-for="page in pages"
            :key="'headerNav-' + page"
            @click="updateCurrentPage(page)"
          >
            <router-link class="nav-link" :to="{ name: page }"
              >{{ page | titleCase }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "headerNav",
  data() {
    return {
      pages: ["all", "favorite"],
    };
  },
  methods: {
    ...mapActions(["updateCurrentState"]),
    updateCurrentPage(page) {
      this.updateCurrentState(page);
    },
  },
  filters: {
    titleCase(value) {
      return `${value.charAt(0).toUpperCase()}${value.substr(1).toLowerCase()}`;
    },
  },
};
</script>

<style>
</style>