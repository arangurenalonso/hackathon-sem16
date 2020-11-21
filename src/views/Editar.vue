<template>
  <div>
    <p>Editar Contacto</p>
    <div class="Usuario">
      <form @submit.prevent="editarUserAction(User)">

        <div class="box">
          <div class="box10 texto">Edad:</div>
          <input class="box10 dato" type="text" v-model="User.Edad" />

          <div class="box20 texto">Nombre:</div>
          <input class="box20 dato" type="text" v-model="User.Nombre" />

          <div class="box20 texto">Apellido:</div>
          <input class="box20 dato" type="text" v-model="User.Apellido" />
        </div>

        <div class="box">
          <div class="texto box20">email:</div>
          <input class="box80 dato" type="text" v-model="User.Correo" />
        </div>

        <button>Editar</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      id: this.$route.params.idUser,
    };
  },
  methods: {
    ...mapActions(["getUserAction", "editarUserAction"]),
  },
  computed: {
    ...mapState(["User"]),
  },
  created() {
    this.getUserAction(this.id);
  },
};
</script>

<style lang="scss" scoped>
.Usuario {
  width: 750px;
  margin: auto;
}

h1 {
  margin-bottom: 50px;
}

.box {
  display: flex;
  flex-direction: row;
  height: 50px;
  border-bottom: #b7b7b7 2px solid;
  align-items: center;
  margin: 0 0 20px 0;
  position: relative;

  &5 {
    width: 5%;
  }

  &10 {
    width: 10%;
  }

  &15 {
    width: 15%;
  }

  &20 {
    width: 20%;
  }

  &30 {
    width: 30%;
  }

  &40 {
    width: 40%;
  }

  &50 {
    width: 50%;
  }

  &60 {
    width: 60%;
  }

  &70 {
    width: 70%;
  }

  &80 {
    width: 80%;
  }

  &90 {
    width: 90%;
  }

  &100 {
    width: 100%;
  }
}

.boxTitulo {
  position: absolute;
  top: -7.5px;
  text-decoration: underline;
  color: slategrey;
  font-weight: 800;
}

.dato {
  font-size: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 15px;
  border: none;
  border-bottom: solid red 2px;
  text-align: center;
  
}

.texto {
  border-right: #b7b7b7 2px solid;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>