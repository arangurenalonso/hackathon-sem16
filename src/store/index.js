import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './../router'

Vue.use(VueAxios, axios)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarios:[],
  },
  mutations: {
    getUsuariosMutation(state, payload){
      state.usuarios=payload;
    },
    deleteUserMutation(state,payload){
      state.usuarios=state.usuarios.filter(items=>
        items.id !== payload)
    }
  },
  actions: {
    /*
    async getUsuariosAction({commit}){
      const info =await fetch('http://localhost:3000/usuarios/')
      const data = await info.json();
      console.log(data)
      commit('getUsuariosMutation',data)
        },
    */
   getUsuariosAction({commit}){
    Vue.axios.get('http://localhost:3000/usuarios/').then((response) => {
      console.log(response.data)
      commit('getUsuariosMutation',response.data)
    })
   },
   deleteUserAction({commit}, id){
     Vue.axios.delete(`http://localhost:3000/usuarios/${id}`).then(() => {
      commit('deleteUserMutation',id)
      
    })
   },
   crearUserAction({commit}, usuarioNuevo){
     Vue.axios.post('http://localhost:3000/usuarios/',usuarioNuevo).then((response) => {
      router.push('/')
    })

   }
  },
  modules: {
  }
})
