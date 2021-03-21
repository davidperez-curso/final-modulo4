<template>  
    <div class="list-group">

        <ul class="list-group list-group-horizontal my-1" v-for="(producto, index) of productos" :key="producto.id" >
            <li class="list-group-item "> ID: {{index}}</li>
            <li class="list-group-item flex-fill">Producto: {{producto.nombre}}</li>
            <li class="list-group-item flex-fill">Precio: {{producto.precio}}</li>
            <li class="list-group-item">Cantidad: {{producto.cantidad}}</li>
            <li class="list-group-item">Total: {{producto.total}}</li>
            <button class="btn btn-warning mx-1" @click="actualizar(index)">Actualizar</button>
            <button class="btn btn-danger mx-1" @click="eliminate(index)">borrar</button>
        </ul>

        <h1>Total: {{total}}</h1>
        
    </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
    
    computed:{
        ...mapState(['productos', 'datos', 'total'])
    },
    methods:{
        ...mapMutations(['eliminate','actualizar']),
       
    }

}
</script>

<style>

</style>