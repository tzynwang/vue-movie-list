<template>
  <div class="input-group mt-3">
    <input
      type="text"
      class="form-control"
      placeholder="Enter some keywords"
      aria-label="Enter some keywords"
      aria-describedby="searchBtn"
      id="userInput"
      v-model.trim="userInput"
      @keyup.enter="updateAppState"
      @keyup.esc="leaveSearch"
    />
    <button
      class="btn btn-secondary"
      v-show="getCurrentState === 'search'"
      @click="leaveSearch"
    >
      Clear Result
    </button>
    <button
      class="btn btn-primary"
      type="button"
      @click="updateAppState"
      @keyup.esc="leaveSearch"
    >
      Search
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "searchBar",
  data() {
    return {
      userInput: "",
    };
  },
  methods: {
    ...mapActions([
      "updateCurrentState",
      "updateCurrentPage",
      "updateUserInput",
      "moviesByPage",
      "paginationArray",
    ]),
    leaveSearch() {
      this.userInput = "";
      this.updateCurrentState("all");
      this.updateCurrentPage({page: 1});
      this.updateUserInput("");
      this.moviesByPage();
      this.paginationArray();
    },
    updateAppState() {
      this.updateCurrentState("search");
      this.updateUserInput(this.userInput);
      this.moviesByPage();
      this.paginationArray();
    },
  },
  computed: {
    ...mapGetters(["getCurrentState"]),
  },
};
</script>
