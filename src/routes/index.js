import Vue from 'vue';
// Rutas
import VueRouter from 'vue-router';
// Configuracion BBDD - EndPoint
import firebase from "firebase/app";
import 'firebase/app';
import 'firebase/auth';

// Componentes
import HomeComponent from '../components/home/HomeComponent.vue';
import BlogComponent from '../components/blog/BlogComponent.vue';
import ArticuloComponent from '../components/articulo/ArticuloComponent.vue';
import CrearComponent from '../components/acciones/crear/CrearComponent.vue';
import EditarComponent from '../components/acciones/editar/EditarComponent.vue';
import BuscadorComponent from '../components/buscador/BuscadorComponent.vue';
import RedirectComponent from '../components/buscador/redirect/RedirectComponent.vue';
import LoginComponent from '../components/login/LoginComponent.vue';
import Error404Component from '../components/shared/Error404/Error404Component.vue';

// ---------------------------------------------------------------//
// Configuracion del enrutamiento                                 //
// ---------------------------------------------------------------//
Vue.use(VueRouter);

const routes = [
    {path: '/', component: HomeComponent},
    {path: '/home', component: HomeComponent},
    {path: '/ultimos-articulos', component: HomeComponent},
    {path: '/blog', component: BlogComponent},
    {path: '/articulo/:id', name: 'articulo', component: ArticuloComponent},
    {path: '/crear', name: 'creararticulo', component: CrearComponent, meta: {requiresAuth: true}},
    {path: '/editar/:id', name: 'editararticulo', component: EditarComponent, meta: {requiresAuth: true} },
    {path: '/buscador/:stringBusqueda', component: BuscadorComponent},
    {path: '/redirect/:stringBusqueda', component: RedirectComponent},
    {path: '/login', component: LoginComponent},
    {path: '*', component: Error404Component}
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
    if(requiresAuth) {
      firebase.auth().onAuthStateChanged( (user) => {
        if (!user) next('/')
        else next();
      })
    } else next()
  });

export default router;