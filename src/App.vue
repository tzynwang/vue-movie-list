<template>
  <div id="app">
    <headerNav />
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap' // bootstrap.min.js
import "bootstrap-icons/font/bootstrap-icons.css"
import "@/assets/css/bootstrap.darkly.css";
import "@/assets/css/style.css";

import headerNav from './components/headerNav'

export default {
  name: 'App',
  components: {
    headerNav
  }
}
</script>
