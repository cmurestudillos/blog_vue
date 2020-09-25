<template src="./Home.html"></template>

<script>
// Peticiones Http
//import axios from 'axios';
// EndPoint
//import Global from '../../api/Global';
// Componentes comunes
import SliderComponent from '../shared/slider/SliderComponent';

export default {
  name: 'HomeComponent',
  components: {
        SliderComponent
  },
  mounted(){
    // Llamamos al metodo
    //this.getUltimosArticulos();
  },
  data(){
    //return {
    //  url: Global.url,
    //  articulos: []
   // }
  },
  methods: {
    // Metodo para obtener los ultimos articulos
    //getUltimosArticulos(){
      // Log de seguimiento
    //  console.log('ListaArticulosComponent.vue - Metodo getUltimosArticulos');

    //  axios.get(this.url + 'articulos/true')
    //  .then( res => {
    //    if(res.data.status ==='success'){
    //      this.articulos = res.data.articulos;
    //    }
    //  });
    //}
  }
}
</script>