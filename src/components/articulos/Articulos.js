// EndPoint
import Global from '../../api/Global.js';

export default {
    name: 'ArticulosComponent',
    props: ['articulos'],
    data(){
        return {
        url: Global.url
        }
    }
}