import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos:[],
    datos: {
      nombre: "",
      precio: "",
      cantidad: "",
      total: "",
      id: 1
    },
    totales:[],
    total: "",
    
  },
  mutations: {
    ingresar(state){
      const a = state.datos.nombre;
      const b = state.datos.precio;
      const c = state.datos.cantidad;
      const d = eval(b*c);
      const e = state.datos.id ++
      console.log(state.datos);
      // push() ingresa el objeto con los datos que entrega v-model en el template
      state.productos.push({ nombre: a, precio: b, cantidad: c, total: d, id: e});
      //en el array totales, se van guardando los totales de cada objeto (precio * cantidad) para luego sumarlos y sacar el total de la lista
      state.totales.push(d);
      console.log(state.totales);
      state.datos.nombre = "";
      state.datos.precio = "";
      state.datos.cantidad = "";
      console.log(state.productos);
      //reduce() suma todos los valores del array totales y ese será el total de la lista
      state.total = state.totales.reduce((a,b)=> a + b, 0); 
    },
    eliminate(state,index){
      
      console.log(state.productos[index].total);
      // 'restar' será el valor total (precio * cantidad) del producto especifico que vamos a eliminar, para capturarlo usamos el parámetro index
      const restar = state.productos[index].total
      // 'restar2' es el valor actual de la suma de todos los elementos del array totales, osea es el valor total actual
      const restar2 = state.totales.reduce((a,b)=> a + b, 0);
      console.log(restar2)
      console.log(eval(restar2 - restar))
      //con push() agregamos al array 'totales' el valor negativo total del producto que vamos a eliminar, esto para que cuando sigamos agregando 
      //productos, se descuente el que eliminamos
      state.totales.push(-restar) 
      // con splice() eliminamos el producto del array 'productos', de esta forma al ejecutarse el for, el elemento desaparece del dom
      state.productos.splice(index,1)
      // restamos al valor actual total el valor total del elemento eliminado y se lo asignamos al state.total para que se actualice en la página,
      //luego, como habiamos agregado en valor en negativo del producto al array totales, al ingresar otro producto esta resta se mantiene.
      state.total = eval(restar2 - restar)
    },
    actualizar(state,index){
      console.log('actualizar ', index);
      const restarProducto = state.productos[index].total
      const restarTotales = state.totales.reduce((a,b)=> a + b, 0);
      state.totales.push(-restarProducto)
      
      const a = state.datos.nombre;
      const b = state.datos.precio;
      const c = state.datos.cantidad;
      const d = eval(b*c);
      const e = state.datos.id ++
      const cambio = {nombre: a, precio: b, cantidad: c, total: d, id: e}
      state.productos.splice(index, 1, cambio);
      state.totales.push(d)
      // hacemos algo parecido que en la función anterior, solo que ahora además de restar el valor del elemento que se cambia, se suma el valor
      // del nuevo elemento.
      state.total = eval(restarTotales - restarProducto + d)
      state.datos.nombre = "";
      state.datos.precio = "";
      state.datos.cantidad = "";
      

    }
    
  },
  actions: {
  },
  modules: {
  }
})
