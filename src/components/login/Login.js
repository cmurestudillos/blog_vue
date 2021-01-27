// Configuracion BBDD - EndPoint
import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";

// Componentes comunes
import SliderComponent from '../shared/slider/SliderComponent';
import SidebarComponent from '../shared/sidebar/SidebarComponent';

export default {
    name: 'LoginComponent',
    components: {
        SliderComponent,
        SidebarComponent,
    },
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        // Metodo para conectarse al panel de control
        logIn() {
        // Log de seguimiento
        console.log('LoginComponent.vue - Metodo logIn');

        firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then( () =>  {
                this.$router.replace('crear')
            })
            .catch(function(error) {
                console.log(error.message)
            });
        }
    }        
}