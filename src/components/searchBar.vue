<template>
  <div class="input-group mt-3" v-show="currentState !== 'favorite'">
    <template>
      <input
        type="text"
        class="form-control"
        placeholder="Enter some keywords"
        aria-label="Enter some keywords"
        aria-describedby="searchBtn"
        id="userInput"
        v-model.trim="userInput"
        @keyup.enter="updateAppState('search')"
        @keyup.esc="leaveSearch"
      />
      <button
        class="btn btn-secondary"
        v-show="currentState === 'search'"
        @click="leaveSearch()"
      >
        Clear Result
      </button>
      <button
        class="btn btn-primary"
        type="button"
        @click="updateAppState('search')"
        @keyup.esc="leaveSearch"
      >
        Search
      </button>
    </template>
    <template>
      <p class="mt-3" v-show="currentState === 'search'">
        The search results of '{{ searchInput }}' ({{ searchResultQty }}):
      </p>
      <p class="mt-3" v-show="noMatchResult">
        {{ noResultMessage }}
      </p>
    </template>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>