import Vue from 'vue'
import App from './App.vue'

// Rutas
import VueRouter from 'vue-router'

// Validacion de formularios
import Vuelidate from 'vuelidate';

// Formato de fechas
import VueMoment from 'vue-moment';
const moment = require('moment')
require('moment/locale/es')

// BBDD y configuracion
const VueFire = require('vuefire');

// Componentes
import HomeComponent from './components/home/HomeComponent.vue';
import BlogComponent from './components/blog/BlogComponent.vue';
import ArticuloComponent from './components/articulo/ArticuloComponent.vue';

import Error404Component from './components/shared/Error404/Error404Component.vue';

// ---------------------------------------------------------------//
// Configuracion para test/produccion                             //
// ---------------------------------------------------------------//
Vue.config.productionTip = false
// ---------------------------------------------------------------//
// Configuracion del enrutamiento                                 //
// ---------------------------------------------------------------//
Vue.use(VueRouter);
// ---------------------------------------------------------------//
// Configuracion de la validacion                                 //
// ---------------------------------------------------------------//
Vue.use(Vuelidate);
// ---------------------------------------------------------------//
// Configuracion para fechas                                      //
// ---------------------------------------------------------------//
Vue.use(VueMoment, {moment});
// ---------------------------------------------------------------//
// Configuracion para usar Firebase en Vue.js                     //
// ---------------------------------------------------------------//
Vue.use(VueFire);

const routes = [
  {path: '/', component: HomeComponent},
  {path: '/home', component: HomeComponent},
  {path: '/ultimos-articulos', component: HomeComponent},
  {path: '/blog', component: BlogComponent},
  {path: '/articulo/:id', name: 'articulo', component: ArticuloComponent},
  //{path: '/crear-articulo', name: 'creararticulo', component: CrearArticuloComponent},
  //{path: '/editar-articulo/:id', name: 'editararticulo', component: EditarArticuloComponent},
  //{path: '/buscador/:stringBusqueda', component: BuscadorComponent},
  //{path: '/redirect/:stringBusqueda', component: RedirectComponent},
  //{path: '/formulario', component: FormularioComponent},
  {path: '*', component: Error404Component}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
