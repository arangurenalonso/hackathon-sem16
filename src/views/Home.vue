<template>
  <div class="home">
    <p class="tituloUsuarios">Lista de usuarios</p>
    <router-link to="/crearcontacto">
      <button class="CrearUsuario">Crear Usuario</button>
    </router-link>

    <ul class="contenedor-usuarios">
      <li class="usuario usuario-encabezado">
        <div class="usuario-nombre box">Nombre</div>
        <div class="usuario-apellido box">Apellido</div>
        <div class="usuario-correo box">Correo</div>
        <div class="usuario-edad box">Edad</div>

        <div class="usuario-boxBoton box">Edit</div>
        <div class="usuario-boxBoton box">Delete</div>
      </li>

      <li class="usuario" v-for="user in usuarios" :key="user.id">
        <div class="usuario-nombre box">{{ user.Nombre }}</div>
        <div class="usuario-apellido box">{{ user.Apellido }}</div>
        <div class="usuario-correo box">{{ user.Correo }}</div>
        <div class="usuario-edad box">{{ user.Edad }}</div>

        <div class="usuario-boxBoton box">
          <div>
            <router-link
              :to="{
                name: 'Editar',
                params: {
                  idUser: user.id,
                },
              }"
            >
              <button class="usuario-boton box">
                <img class="usuario-botonImg" src="../assets/ojo.svg" alt="" />
              </button>
            </router-link>
          </div>
        </div>
        <button class="usuario-boxBoton box" @click="deleteUserAction(user.id)">
          <img class="usuario-botonImg" src="../assets/basura.png" alt="" />
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from "vuex";

export default {
  methods: {
    ...mapActions(["getUsuariosAction", "deleteUserAction"]),
  },
  computed: {
    ...mapState(["usuarios"]),
  },
  created() {
    this.getUsuariosAction();
  },
};
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.CrearUsuario {
  width: 40%;
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
.contenedor-usuarios {
  max-width: 700px;
  min-width: 500px;
  margin: auto;
}

.tituloUsuarios {
  font-size: 50px;
  color: #b7b7b7;
  text-decoration: underline;
}

.usuario {
  height: 50px;

  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: #b7b7b7 2px solid;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  &-encabezado {
    background-color: #222222;
    color: #d2b694;
    font-size: 22px;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }

  &-edad {
    width: 10%;
    height: 100%;
  }

  &-nombre,
  &-apellido {
    width: 15%;
    height: 100%;
  }

  &-correo {
    width: 30%;
    height: 100%;
  }

  &-boxBoton {
    width: 10%;
    height: 100%;
    cursor: pointer;
  }

  &-boton {
    height: 30px;
    width: 30px;
    border-radius: 50%;
  }

  &-botonImg {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>