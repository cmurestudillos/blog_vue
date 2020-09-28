// EndPoint
import axios from 'axios';
import Global from '../../api/Global';
// Modelo
import ArticuloModel from '../../models/ArticuloModel';
// Componentes comunes
import SliderComponent from '../shared/slider/SliderComponent';
import SidebarComponent from '../shared/sidebar/SidebarComponent';
import ArticulosComponent from '../articulos/ArticulosComponent';

export default {
  name: 'HomeComponent',
  components: {
        SliderComponent,
        SidebarComponent,
        ArticulosComponent
  },
  mounted(){
    // Llamamos al metodo
    this.getUltimosArticulos();
  },
  data(){
    return {
      url: Global.url,
      articulos: []
    }
  },
  methods: {
    // Metodo para obtener los ultimos articulos
    getUltimosArticulos(){
      // Log de seguimiento
      console.log('HomeComponent.vue - Metodo getUltimosArticulos');

      axios.get(this.url + '/articulos.json')
      .then( res => {
        if(res.data){
           this.articulos = this.ordenarArray(res.data)
          //this.articulos = res.data.articulos;
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
            if(articulosData.length <= 4){
                articulo.id = key;
                // Devolvemos en el Array el objeto extraido
                articulosData.push(articulo);
            }
        });

        return articulosData;
    }    
  }
}