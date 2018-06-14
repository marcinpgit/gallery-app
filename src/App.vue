<template>
  <div id="app">
    <header-page></header-page>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'

import HeaderPage from './components/HeaderPage.vue'
import IntroPage from './components/IntroPage.vue'

export default {
  name: 'App',
  components: {
    HeaderPage,
    IntroPage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
