<template>
    <div class='sample-work-wrapper'><br />
        <h1 v-text="$ml.with('VueJS').get('Advantages')" />
        <Search />
    </div>
</template>

<script>
import Search from './Search.vue';

export default {
    components: {
        Search
    }
}
</script>

