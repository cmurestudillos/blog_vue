// Peticiones Http
import axios from 'axios';
// EndPoint
import Global from '../../api/Global.js';
// Componentes comunes
import SidebarComponent from '../shared/sidebar/SidebarComponent.vue';
// Popup de alerta
import swal from 'sweetalert';

export default {
    name: 'ArticuloComponent',
    components: {
            SidebarComponent
    },  
    mounted(){
        // Recogemos el parametro id del articulo seleccionado
        this.articuloId = this.$route.params.id; 
        // Llamamos al metodo
        this.getArticulo(this.articuloId);
    },      
    data(){
        return {
            url: Global.url,
            articulo: []
        }
    },
    methods: {
        // Metodo para obtener datos del articulo seleccionado
        getArticulo(articuloId){
            // Log de seguimiento
            console.log('ArticuloComponent.vue - Metodo getArticulo');

            axios.get(this.url + '/articulos/' + articuloId + '.json')
            .then( res => {
                if(res.data){
                    this.articulo = res.data;
                }
            });
        },
        // Metodo para eliminar un articulo
        eliminarArticulo(articuloId){
            // Log de seguimiento
            console.log("ArticuloComponent.vue - Metodo eliminarArticulo");

            // popup de confirmacion
            swal({
                title: "¿Estas seguro?",
                text: "Una vez eliminado, no podrá recuperar este archivo.",
                icon: "warning",
                buttons: true,
                dangerMode: true,
                })
                .then((willDelete) => {
                if (willDelete) {
                    axios.delete(this.url + '/articulos/' + articuloId + '.json')
                    .then(res => {
                        this.articulo = res.data;
                        // Redireccionamos al articulo editado
                        this.$router.push('/blog');
                    });
                } else {
                    swal("Tu archivo esta seguro.");
                }
            });
        }
    }
}