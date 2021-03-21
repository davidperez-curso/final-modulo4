<template>
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Nombre del Producto" v-model="datos.nombre">
      <input type="number" class="form-control" placeholder="Precio" v-model="datos.precio">
      <input type="number" class="form-control" placeholder="Cantidad" v-model="datos.cantidad"> 
      <div class="input-group-append">
          <button class="btn btn-success" @click="ingresar">Ingresar</button>
      </div>
  </div>
  
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    computed: {
        ...mapState(['productos', 'datos'])
    },
    methods: {
        ...mapMutations(['ingresar'])
    }


}
</script>

<style>

</style>