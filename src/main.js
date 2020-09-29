import Vue from 'vue';
import App from './App.vue';
// Rutas
import router from './routes/index';
// Validacion de formularios
import Vuelidate from 'vuelidate';
// Formato de fechas
import VueMoment from 'vue-moment';
const moment = require('moment')
require('moment/locale/es')
// BBDD y configuracion
const VueFire = require('vuefire');
// Configuracion BBDD - EndPoint
import "@/firebase.js";
// Iconos
require('./plugins/fontawesome');

// ---------------------------------------------------------------//
// Configuracion para test/produccion                             //
// ---------------------------------------------------------------//
Vue.config.productionTip = false
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

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
