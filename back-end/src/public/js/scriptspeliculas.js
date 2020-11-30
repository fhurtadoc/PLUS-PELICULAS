$(document).ready(function(){

    
    $.get('/listapublica', function(response){
        
        var peliculas=response.elemntosmulti.filter(function(element){

            return(element.categoria=="pelicula");
        });
        
        peliculas.forEach(pelicula => {

            var elementomulti=`
                <div class="elementomilti" >
                    <h2>${pelicula.nombre}</h2>
                    <a href="#"><img src="imagenes/${pelicula.imagen}" width="150" height="180"></a>                    
                </div>
            `;
            $("#contenedor").append(elementomulti); 
        });
    });   

})