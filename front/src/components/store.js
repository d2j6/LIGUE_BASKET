import Vuex from "vuex"

const state = {
    nom:"Jo",
    prenom:"Does"
}


const mutations = {
    change:(state,{nom,prenom})=>{
        state.nom = nom
        state.prenom = prenom

        console.log("mutation effectuee")
    }
}

const actions = {
    change:(store)=> {
        // store.commit("change",{nom,prenom})
        console.log("okay ary eee")
    }
}


let getters = {

    nomComplet: state => state.nom + " " + state.prenom,
    nom: state => state.nom,
    prenom: state => state.prenom



}


let store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions:{}
})






export default store