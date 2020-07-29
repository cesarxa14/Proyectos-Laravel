<template>
    <div class="seccion">
        <Portada></Portada>
        
    </div>
</template>

<script>
import Portada from './Portada.vue'
export default {
    name: "Seccion",

    components:{
        Portada
    }
    
}
</script>


<style scope>

.seccion{

    position: relative;
    margin-left: 10%;
    margin-right: 10%;
    height: 500px;
    background-color:#f08a5d;
    
}
    
</style>