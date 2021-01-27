// Peticiones Http
import axios from 'axios';
// EndPoint
import Global from '../../api/Global';
// Modelo
import ArticuloModel from '../../models/ArticuloModel';
// Componentes comunes
import SliderComponent from '../shared/slider/SliderComponent';
import SidebarComponent from '../shared/sidebar/SidebarComponent';
// Componentes
import ArticulosComponent from '../articulos/ArticulosComponent';

export default {
  name: 'BlogComponent',
  components: {
        SliderComponent,
        SidebarComponent,
        ArticulosComponent
  },
  mounted(){
    // Llamamos al metodo
    this.getArticulos();
  },
  data(){
    return {
      url: Global.url,
      articulos: []
    }
  },
  methods: {
    // Metodo para obtener los articulos
    getArticulos(){
      // Log de seguimiento
      console.log('BlogComponent.vue - Metodo getArticulos');

      axios.get(this.url + '/articulos.json')
      .then( res => {
        if(res.data){
            this.articulos = this.ordenarArray(res.data);
        }
      });
    },
    // Metodo para mostrar los ultimos 5 articulos creados
    ordenarArray(articulosArray){

        var articulosData = [];
        if(articulosArray === null){
            return [];
        }

        Object.keys(articulosArray).reverse().forEach( key => {
            var articulo = ArticuloModel; 
            articulo = articulosArray[key];
            articulo.id = key;
            // Devolvemos en el Array el objeto extraido
            articulosData.push(articulo);
        });

        return articulosData;
    }     
  }
}