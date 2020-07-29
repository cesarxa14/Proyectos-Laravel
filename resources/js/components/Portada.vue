<template>
    <div class="portada">
        <div class="porta-info">
            <a href=""><h2>Jefferson Farfán no continuará en el Lokomotiv, según medios rusos</h2></a>
            <p>El peruano no estaría en los planes del cuadro 'Loko' luego del término de la temporada. Tendrá que buscar un nuevo club.</p>

        </div>
        <div class="porta-foto">
            

        </div>
        
        
    </div>
</template>

<script>
export default {
    name: "Portada"
    
}
</script>

<style scope>

.portada{
    position: absolute;
    height: 350px;
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
    margin-top: 5%;
    margin-bottom: 5%;
    display: grid;
    grid-template-columns: 35% 65% ;
    background-color:#eeecda;
    border-radius: 2%;
    border:1px solid black
    
    
    
}

.porta-info{
    
    padding:3%;
    color:black;

}
.porta-info a[href]
{
    color: black;
    text-decoration: none;
}
.porta-info a[href]:hover{
    color:turquoise
}

.porta-foto{
    
    margin: 5%;
    position: relative;

}

.porta-foto img{
   max-width: 100%;
   
  
}
    
</style>