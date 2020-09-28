export default {
    name: 'RedirectComponent',
    mounted(){
        var stringBusqueda = this.$route.params.stringBusqueda;
            this.$router.push('/buscador/' + stringBusqueda);
    }
}