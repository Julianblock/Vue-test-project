<template>
    <div class='nav'>
    <button
    v-for="lang in $ml.list"
    :key="lang"
    @click="$ml.change(lang)"
    v-text="lang"
/>
    </div>
</template>
