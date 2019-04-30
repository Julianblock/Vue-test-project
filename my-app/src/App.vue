
<script>
import HelloWorld from './components/HelloWorld.vue'
import Layout from './layout/index.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Layout
  }
}
</script>

<template>
  <div id='app' class='app'>
    <Layout />
    <div class='content'>
      <router-view />
      <HelloWorld msg="Home"/> 
    </div>
  </div>
</template>


<style>
@import 'styles/_index.scss';
</style>
