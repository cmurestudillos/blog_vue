<!-- Vista HTML -->
<template src="Buscador.html"></template>

<!-- Funcionalidad JS -->
<script>
// Peticiones Http
import axios from 'axios';
// EndPoint
import Global from '../api/Global.js';
// Componentes comunes
import SliderComponent from './shared/SliderComponent';
import SidebarComponent from './shared/SidebarComponent.vue';
// Componentes
import ArticulosComponent from './ArticulosComponent.vue';

export default {
  name: 'BuscadorComponent',
  components: {
        SliderComponent,
        SidebarComponent,
        ArticulosComponent
  },
  mounted(){
    // Recogemos el parametro de busqueda
    this.stringBusqueda = this.$route.params.stringBusqueda; 
    // Llamamos al metodo
    this.buscarArticulos(this.stringBusqueda);
  },
  data(){
    return {
      url: Global.url,
      articulos: [],
      stringBusqueda: null
    }
  },
  methods: {
    // Metodo para buscar los articulos
    buscarArticulos(stringBusqueda){
      // Log de seguimiento
      console.log('BuscadorComponent.vue - Metodo buscarArticulos');

      axios.get(this.url + 'search/' + stringBusqueda)
      .then( res => {
        if(res.data.status ==='success'){
          this.articulos = res.data.articulos;
        }
      });

    }
  }
}
</script>