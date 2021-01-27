// Peticiones Http
import axios from 'axios';
// EndPoint
import Global from '../../../api/Global';
// Configuracion BBDD - EndPoint
import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";
// Modelo del Articulo
import ArticuloModel from '../../../models/ArticuloModel';
// Popup de alerta
import swal from 'sweetalert';

export default {
  name: 'CrearComponent',
  mounted(){
    if(this.articulo.titulo && this.articulo.contenido){
      // Llamamos al metodo
      this.guardarArticulo();
    }
  },
  data(){
    return {
      url: Global.url,
      articulo: new ArticuloModel('', '', null, '')
    }
  },
  methods: {
      // Metodo para guardar Articulos
      guardarArticulo(){
        // Log de seguimiento
        console.log('CrearComponent.vue - Metodo guardarArticulo');

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
     },
    // Metodo para desconectarse
    logOut() {
      // Log de seguimiento
      console.log('CrearComponent.vue - Metodo logOut');

      firebase
      .auth()
      .signOut()
          .then( () => {
            this.$router.push('/home');
      })
    }       
  }
}