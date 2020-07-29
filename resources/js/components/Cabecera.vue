<template>
    <div id="cabecera" class="">
        
        <div class="sub-cabecera">
            <div class="logo text-center">
                <a href="/"><h1>Xavi News</h1></a>
               

            </div>
            <div class="enlaces">
            
                <ul>
                    <li><a href="">Futbol Peruano</a></li>
                    <li><a href="">Futbol Internacional</a></li>
                    <li><a href="">Ultimas Noticias</a></li>
                    <li><a href="">Champions</a></li>
                    <li><a href="">Galeria</a></li>
                </ul>

            </div>

        </div>
      
    </div>
</template>

<script>
export default {
    name: "Cabecera"
}
</script>

<style scope>

#cabecera{
    display: grid;
    
    
}



.sub-cabecera{
    display: grid;
    grid-template-columns: 15% 85%;
    background-color: #393e46;
    border-radius: 3px;
}
.logo{
    color:black;
    background-color: #eeeeee;
    
}
.logo h1{
    margin-left: 5px;
}


.enlaces ul{
    
    height: 100%;
    padding-top: 10px;
}
.enlaces ul li {
    list-style:none;
    display: inline-block;
    margin-left: 3rem;
    border-radius: 5px;
    text-align: center  ;
    
    width: 150px;
    
    

    
}

.enlaces ul li:hover{
    background-color: black;
}
.enlaces ul li a[href]{
    color:white;
    font-size: 16px;
    text-decoration: none;

}
.sub-cabecera a{
    text-decoration: none;
}






    
</style>