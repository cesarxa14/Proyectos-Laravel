<template>
    <div >
        
        <div class="panel">

            <div class="cabeza"><h1>Admin</h1></div>

        <div class="opciones">

            <div class="uno"><a href="./agregar"><h3>AGREGAR NOTICIAS</h3></a></div>
            <div class="dos"><a href="./editar"><h3>EDITAR NOTICIAS</h3></a> </div>
            <div class="tres"><a href="./borrar"><h3>BORRAR NOTICIAS</h3></a></div>

        </div>

        </div>

        <div class="formu">
                <div class="card">
                    <div class="card-header text-center">
                        <h1>Agregar Noticia</h1>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="agregar" enctype="multipart/form-data">
                            <label for="" class="my-3">Titulo</label>
                            <input type="text" placeholder="Escribe el titulo" class="form-control" v-model="noticiaNueva.titulo">
                            <label for="" class="my-3">Descripcion</label>
                            <textarea v-model="noticiaNueva.descripcion" class="form-control " name="" cols="30" rows="5" placeholder="Escribe la descripcion"></textarea>
                            <label for="" class="my-3">Imagen</label>
                            <input type="file" class="form-control" @change="obtenerImagen">
                            <figure class="mini">
                                <img width="300"  height="200" :src="imagen" alt="Foto de la noticia">
                            </figure>
                            <button type="submit" class="btn btn-success my-3 btn-block">Agregar</button>

                        </form>

                    </div>
                    <div class="card-footer">
                        
                    </div>

                </div>
            

        </div>

        
        
    </div>

    
</template>

<script>
export default {
    data(){
        return{
            imagenMiniatura: '',
            noticias: [],
            noticiaNueva: {titulo: '' , descripcion: '', foto: ''}
        }
    },
    //Falta entender esta parte del codigo, sino me fijo en el video
    created(){
        axios.get('/noticias')
        .then(res =>{
            this.noticias = res.data;
        })

    },
    methods: {

        obtenerImagen(e){
            let file = e.target.files[0];
            
            this.noticiaNueva.foto = file;
            
            this.cargarImagen(file);
            
            

        },
        cargarImagen(file){

            let reader = new FileReader();
            reader.onload = (e) => {
                this.imagenMiniatura = e.target.result;
            }
            reader.readAsDataURL(file);
            
        },
        agregar(){
            if(this.noticiaNueva.titulo.trim() === '' || this.noticiaNueva.descripcion.trim() === '' 
            || this.noticiaNueva.foto == null)
             {
                 alert('Debes completas todos los campos');
                 return;
             }

            //  const parametros = {titulo: this.noticiaNueva.titulo, descripcion: this.noticiaNueva.descripcion,
            //  foto: this.noticiaNueva.foto}
            let formData = new FormData();
            formData.append('titulo', this.noticiaNueva.titulo);
            formData.append('descripcion', this.noticiaNueva.descripcion);
            formData.append('foto', this.noticiaNueva.foto);
            

            axios.post('/noticia',formData)
            .then(response =>{
                this.noticias.push(response.data);
            })
        }
    },
    computed:{
        imagen(){
            return this.imagenMiniatura;
        }
    }

}
</script>

<style scope>

.panel{
    display: grid;
    grid-template-rows: 20% 80%;
    position: absolute;
    width: 30%;
    height: 90%;
    background-color:midnightblue;
}

.cabeza{
  display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    text-align: center;
    background-color: black;
    color: white;
    transition: ease 0.5s;
}
.cabeza:hover{
    background-color: darkslategray;
}

.opciones{
    display: grid;
    grid-template-rows: 33% 33% 33%;
    text-align: center;
    
    
}

.opciones div{
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    
    
    
}
.opciones .uno a h3:hover{
    transition: all 0.5s;
    font-size: 30px; 
    
}
.opciones .dos a h3:hover{
    transition: all 0.5s;
    font-size: 30px; 
}

.opciones .tres a h3:hover{
    transition: all 0.5s;
    font-size: 30px; 
    
}



.opciones div a{
    color:white;
    text-decoration: none;
}

.formu{
    position: absolute;
    margin-top: 100px;
    margin-left: 40%;
    width: 50%;
}

.mini{
    margin: 20px 50px;
}
    
</style>