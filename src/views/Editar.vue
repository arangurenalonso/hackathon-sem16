<template>
  <div>
    <p>Editar Contacto</p>
  
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
    data(){
        return{
            id:this.$route.params.idUser,
        }
    }
}
</script>

<style>

</style>