<script setup>
import { RouterLink, RouterView } from 'vue-router'



</script>

<template>
  <div class="ui menu">
    <RouterLink to="/" class="item">BFF</RouterLink>
    <RouterLink to="/joueurs" class="item">Joueurs</RouterLink>
    <RouterLink to="/" class="item">Equipes</RouterLink>
    <RouterLink to="/championnats" class="item">Championnats</RouterLink>
  </div>

  <RouterView></RouterView>






</template>

<style >
</style>
