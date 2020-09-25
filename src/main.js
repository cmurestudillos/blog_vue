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

// Componentes
import HomeComponent from './components/home/HomeComponent.vue';
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

const routes = [
  {path: '/', component: HomeComponent},
  {path: '/home', component: HomeComponent},
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
