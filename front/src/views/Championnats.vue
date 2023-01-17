<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';

import axios from "axios"




var test = ref("dfsf")

onMounted(()=>{
    axios.get("http://localhost:5000/test").then(response=>{
        
        test.value = response.data
        // console.log(response.data)

    })
})


let view = (id)=>{
    console.log(id)
}


</script>

<template>
<div class="ui header">Championnats </div>
    <div class="ui grid allChampionnat" >
        <div class="ui row">
            <div @click="view(chp.idChampionnat)" class="column ui segment grey" style="margin-left:50px;" v-for="chp in test">
                {{ chp.nomChampionnat}}
                {{ chp.dateChampionnat}}
            
            </div>
            <div class="column" align="center" style="display:flex;align-items: center;"><i class="add icon "></i></div>
        </div>
    </div>


</template>