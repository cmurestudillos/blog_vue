<template src="./Sidebar.html"></template>

<script>
export default {
  name: 'SidebarComponent',
  data(){
      return{
          stringBusqueda: null
      }
  },
  methods: {
      // Metodo para buscar articulos desde el buscador
      buscarTexto(){
          this.$router.push('/redirect/' + this.stringBusqueda);
      }
  }
}
</script>