<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>

    <router-view></router-view>

    <!-- Limpiar los float -->
    <div class="clearfix"></div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
// Componentes comunes
import HeaderComponent from './components/shared/header/HeaderComponent.vue';
import FooterComponent from './components/shared/footer/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>
/* Estilos */
@import './assets/css/App.css';
@import './assets/css/responsive.css';
</style>
