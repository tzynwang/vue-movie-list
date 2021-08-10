<template>
  <nav aria-label="Page navigation" class="my-3">
    <ul class="pagination justify-content-center">
      <li
        class="page-item"
        v-for="page in paginationArrayFromParent"
        :key="'pagination-' + page"
        :class="{ active: page === currentPageFromParent }"
        @click="toUpdateCurrentPage({ page })"
      >
        <router-link
          class="page-link"
          :to="{ name: 'all', query: { page } }"
          >{{ page }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "pagination",
  props: {
    currentPageFromParent: {
      type: Number,
      required: true
    },
    paginationArrayFromParent: {
      type: Array,
      required: true
    }
  },
  methods: {
    ...mapActions(["updateCurrentPage", "moviesByPage"]),
    toUpdateCurrentPage(page) {
      this.currentPage = page.page;
      this.updateCurrentPage(page);
      this.moviesByPage();
    },
  }
};
</script>

<style>
</style>