// Peticiones Http
import axios from 'axios';
// EndPoint
import Global from '../../../api/Global';
// Componentes comunes
import SidebarComponent from '../../shared/sidebar/SidebarComponent.vue';
// Validacion del formulario
import {required} from 'vuelidate/lib/validators';
// Modelo del Articulo
import ArticuloModel from '../../../models/ArticuloModel';
// Popup de alerta
import swal from 'sweetalert';

export default {
  name: 'EditarComponent',
  components: {
        SidebarComponent
  },
  mounted(){
    // Recogemos el parametro id del articulo seleccionado
    this.articuloId = this.$route.params.id; 
    // Llamamos al metodo
    this.getArticulo(this.articuloId);

    // Llamamos al metodo
    this.guardarArticuloEditado();
  },
  data(){
    return {
      url: Global.url,
      articulo: new ArticuloModel('', '', null, ''),
      submitted: false,
      file: ''
    }
  },
  validations: {
    articulo:{
        titulo:{
            required
        },
        contenido: {
            required
        }
    }
  },
  methods: {
    // Metodo para obtener datos del articulo seleccionado
    getArticulo(articuloId){
        // Log de seguimiento
        console.log('EditarComponent.vue - Metodo getArticulo');

        axios.get(this.url + '/articulos/' + articuloId + '.json')
        .then( res => {
               if(res.data){
               this.articulo = res.data;
            }
        });
    },

    // Metodo para guardar Articulos
    guardarArticuloEditado(){
      // Log de seguimiento
      console.log('EditarComponent.vue - Metodo guardarArticuloEditado');

      // Aplicar y quitar validaciones
      this.submitted = true;
      this.$v.$touch();
      if(this.$v.$invalid){
          return false;
      }else{
          // si todo ok, guardamos los datos
          this.articulo.fecha = new Date();
          axios.put(this.url + '/articulos/' + this.articuloId + '.json', this.articulo)
          .then( res => {
              if(res.data){
                // Popup de confirmacion
                swal(
                    'Articulo modificado',
                    'El articulo ha sido modificado correctamente.',
                    'success'
                );                          
                // Redireccionamos al articulo editado
                this.$router.push('/articulo/' + this.articuloId); 
              }
          })
          .catch(err => {
              console.log(err); 
          });
      }
    }
  }
}