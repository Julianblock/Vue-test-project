<template>
    <div>
      <SideNav />
      <Navbar />
    </div>
</template>

<script>
import SideNav from './sidenav.vue'
import Navbar from './navbar.vue'

export default {
  name: 'app',
  components: {
    SideNav,
    Navbar
  }
}
</script>