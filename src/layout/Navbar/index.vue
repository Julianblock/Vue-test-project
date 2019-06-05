
<script>
import MenuDropdown from './MenuDropdown.vue';

export default {
    components: {
        MenuDropdown
    }
}
</script>

<template>
    <div class='nav'>
        <button
            v-for="lang in $ml.list"
            :key="lang"
            @click="$ml.change(lang)"
            v-text="lang"
        />
        <MenuDropdown />
    </div>
</template>


<style scoped>
button {
    display: flex;
    height: stretch;
    width: 90px;
    align-content: center;
    justify-content: center;
    background: slategrey;
    color: white;
    font-size: 16px;
    margin-right: 5px;
    border: solid 1px #908c8c;
    border-radius: 12px;
    transition: .8s;
}

button:hover {
    box-shadow: #00ff8d 0px 0px 20px 1px;
    background: linear-gradient(45deg, #a2a2a2, grey);
}

@media (max-width: 900px){
    button {
        font-size: 12px;
        width: 65px;
    }
}
</style>


