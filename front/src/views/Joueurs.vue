<script setup>
import addForm from "@/components/Joueur/addJoueurForm.vue"
import List from "@/components/Joueur/JoueurList.vue"





</script>

<template>

    <div class="ui message blue">Here is the list of players</div>
    <div class="ui grid">
        <div class="two column row">
<div class="column">
    <addForm/>

</div>
<div class="column">
    <List/>

</div>
        </div>
    </div>


</template>