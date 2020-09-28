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
  name: 'CrearComponent',
  components: {
        SidebarComponent
  },
  mounted(){
    // Llamamos al metodo
    this.guardarArticulo();
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
      // Metodo para guardar Articulos
      guardarArticulo(){
        // Log de seguimiento
        console.log('CrearComponent.vue - Metodo guardarArticulo');

        // Aplicar y quitar validaciones
        this.submitted = true;
        this.$v.$touch();
        if(this.$v.$invalid){
            return false;
        }else{
            // si todo ok, guardamos los datos
            this.articulo.fecha = new Date();
            this.articulo.imagen = '';

            axios.post(this.url + '/articulos.json', this.articulo)
            .then( res => {
                if(res.data){
                    // Popup de confirmacion
                    swal(
                        'Articulo Creado',
                        'El articulo ha sido creado correctamente.',
                        'success'
                    );
                    // Redireccionamos a Blog una vez guardado
                    this.$router.push('/blog');
                }
            })
            .catch(err => {
                console.log(err); 
            });
        }
      }
  }
}