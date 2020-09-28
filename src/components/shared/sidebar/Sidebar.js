export default {
    name: 'SidebarComponent',
    data(){
        return{
            stringBusqueda: null
        }
    },
    methods: {
        // Metodo para buscar articulos desde el buscador
        buscarArticulos(){
            this.$router.push('/redirect/' + this.stringBusqueda);
        }
    }
}