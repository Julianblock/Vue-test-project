<template>
<v-navigation-drawer v-model='drawer' app class='indigo'>
    <div class='sidenav'>
        <SideNav />
    </div>
</v-navigation-drawer>
</template>

<script>
import SideNav from './Sidenav.vue'

export default {
    components: {
        SideNav
    }
}
</script>
