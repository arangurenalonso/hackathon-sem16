import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './../router'

Vue.use(VueAxios, axios)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarios: [],
    User: {
      id:"",
      Nombre: "",
      Apellido: "",
      Edad: "",
      Correo: "",
    }
  },
  mutations: {
    getUsuariosMutation(state, payload) {
      state.usuarios = payload;
    },
    getUsuerMutation(state, payload) {
      state.User = payload;
    },
    deleteUserMutation(state, payload) {
      state.usuarios = state.usuarios.filter(items =>
        items.id !== payload)
    }
  },
  actions: {
    getUsuariosAction({
      commit
    }) {
      Vue.axios.get('http://localhost:3000/usuarios/').then((response) => {
        commit('getUsuariosMutation', response.data)
      })
    },
    getUserAction({commit},id) {
      Vue.axios.get(`http://localhost:3000/usuarios/${id}`).then((response) => {
        commit('getUsuerMutation', response.data)
      })
    },
    deleteUserAction({
      commit
    }, id) {
      Vue.axios.delete(`http://localhost:3000/usuarios/${id}`).then(() => {
        commit('deleteUserMutation', id)

      })
    },
    crearUserAction({
      commit
    }, usuarioNuevo) {
      Vue.axios.post('http://localhost:3000/usuarios/', usuarioNuevo).then((response) => {
        router.push('/')
      })
    },

    editarUserAction({commit}, usuarioNuevo) {
      Vue.axios.put(`http://localhost:3000/usuarios/${usuarioNuevo.id}`, usuarioNuevo)
      .then((response) => {
        console.log(usuarioNuevo)
        router.push('/')
      })
    },
  },
  modules: {}
})