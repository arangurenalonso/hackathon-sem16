<template>
  <div class="crearContacto.">
    <h1 class="titulo">Crear Nuevo Contacto</h1>
    <div class="contenedorEdit">
      <form @submit.prevent="crearUserAction(nuevo)">
        <div class="box">
          <label class="texto" for="">Nombre</label>
          <input class="dato" type="text" v-model="nuevo.Nombre" required />
        </div>
        <div class="box">
          <label class="texto" for="">Apellido</label>
          <input class="dato" type="text" v-model="nuevo.Apellido" required />
        </div>
        <div class="box">
          <label class="texto" for="">Edad</label>
          <input class="dato" type="number" v-model="nuevo.Edad" required />
        </div>
        <div class="box">
          <label class="texto" for="">Correo</label>
          <input class="dato" type="email" v-model="nuevo.Correo" required />
        </div>
        <button class="boton">Agregar</button>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

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
  methods: {
    ...mapActions(["crearUserAction"]),
  },
};
</script>



<style lang="scss" scoped>
.titulo{
 margin-bottom: 50px;
 font-size: 40px;
}
.contenedorEdit{ 
  width: 500px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.box{
  margin-bottom: 10px;
  width: 300px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
}
  .texto {
  color: #0a0f44;

}

.dato{
  
  border: none;
  border-bottom: solid  #0a0f44 2px;
  text-align: center;
}
.boton{
   width: 60%;
  margin: 30px 0;
  border: none;
  background-color: #d2b694;
  height: 50px;
  font-size: 30px;
  cursor: pointer;
  font-weight: 800;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border-radius: 20px;
  &:hover {
    color: white;
  }
}
</style>
