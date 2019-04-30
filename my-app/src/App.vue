<template>
  <div id="app">
    <Layout />
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Layout from './layout/index.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    Layout
  }
}
</script>

<style>
@import 'styles/_index.scss';
</style>
