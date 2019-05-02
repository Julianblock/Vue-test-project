
<script>
import Layout from './layout/index.vue'
import Languages from './languages.js'

export default {
  name: 'app',
  components: {
    Layout
  }
}

</script>

<template>
  <div id='app' class='app'>
    <Layout />
    <div class='content'>
      <router-view />
    </div>
  </div>
</template>


<style>
@import 'styles/_index.scss';
</style>
