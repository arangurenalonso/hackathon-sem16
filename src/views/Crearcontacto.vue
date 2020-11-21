<template>
  <div class="crearContacto.">
    <h1>Crear Nuevo Contacto</h1>
    <div>
      {{ nuevo }}
      <form @submit.prevent='crearUserAction(nuevo)'>
        <div>
          <label for="">Nombre</label>
          <input type="text" v-model="nuevo.Nombre" />
        </div>
        <div>
          <label for="">Apellido</label>
          <input type="text" v-model="nuevo.Apellido" />
        </div>
        <div>
          <label for="">Edad</label>
          <input type="text" v-model="nuevo.Edad" />
        </div>
        <div>
          <label for="">Correo</label>
          <input type="e" v-model="nuevo.Correo" />
        </div>
        <button>Agregar</button>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions} from "vuex";

export default {
  
  data() {
    return {
      nuevo: {
        Nombre: "",
        Apellido: "",
        Edad: "",
        Correo: "",
      },
    };
  },
  methods:{
    ...mapActions(["crearUserAction"])

  }
};
</script>
