// Peticiones Http
import axios from 'axios';
// EndPoint
import Global from '../../api/Global.js';
// Modelo
import ArticuloModel from '../../models/ArticuloModel';
// Componentes comunes
import SliderComponent from '../shared/slider/SliderComponent';
import SidebarComponent from '../shared/sidebar/SidebarComponent.vue';
// Componentes
import ArticulosComponent from '../articulos/ArticulosComponent.vue';

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

      axios.get(this.url + '/articulos.json')
      .then( res => {
        if(res.data){
          this.articulos = this.ordenarArray(res.data, stringBusqueda);
        }
      });
    },
    // Metodo para mostrar el articulos/s buscado
    ordenarArray(articulosArray, stringBusqueda){

        var articulosData = [];
        if(articulosArray === null){
            return [];
        }

        Object.keys(articulosArray).forEach( key => {
            var articulo = ArticuloModel;
            articulo = articulosArray[key];
            var titulo = articulo.titulo.toLowerCase();
            var stringTexto = stringBusqueda.toLowerCase();
            if(titulo.includes(stringTexto)){
                articulo.id = key;
                // Devolvemos en el Array el objeto extraido
                articulosData.push(articulo);
            }
        });
        
        return articulosData;
    }
  }
}