<template>
  <div id="app" class="container">
    <Header />
    <Ingreso />
    <Lista class="my-4"/>
    
  </div>
</template>

<script>
import Ingreso from './components/Ingreso.vue'
import Lista from './components/Lista.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Ingreso,
    Lista,
    Header
  }
}
</script>

<style>

</style>
