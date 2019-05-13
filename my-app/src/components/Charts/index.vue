<template>
    <div class='sample-work-wrapper'><br />
        <h1 v-text="$ml.with('VueJS').get('Charts')" />
        <Graph2 />
        <Graph />
        <menu-dropdown />
    </div>
</template>

<script>
import Graph from './Graph.vue';
import Graph2 from './Graph2.vue';

export default {
    components: {
        Graph,
        Graph2
    },
}
</script>

