<template>
    <div class="ui list divided">
        <div class="item" v-for="nom in list">{{ nom }}</div>
    </div>

</template>

<script setup>
import { ref } from 'vue';

let list = ref([
    "Jo","josh","Mark","Lioka"
])

</script>