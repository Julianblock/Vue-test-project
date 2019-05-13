<template>
    <div>
      <SideNav />
      <Navbar />
    </div>
</template>

<script>
import SideNav from './Sidenav/index.vue'
import Navbar from './Navbar/index.vue'

export default {
  name: 'app',
  components: {
    SideNav,
    Navbar
  }
}
</script>