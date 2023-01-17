<template>

    <div class="ui form tiny" style="width:400px">
        <div class="field">
            Nom: <input type="text" v-model="nomJoueur">
        </div>
        <div class="field">
            Prénoms : <input type="text" v-model="prenomJoueur">
        </div>

        <button class="ui button tiny">Ajouter</button>
    </div>



</template>

<script setup>
import { ref } from 'vue';

    let nomJoueur = ref("Nom")
    let prenomJoueur = ref("Prenom")

</script>