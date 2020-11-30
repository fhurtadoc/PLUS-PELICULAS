$(document).ready(function(){

    
    $.get('/listapublica', function(response){
        
        var animes=response.elemntosmulti.filter(function(element){

            return(element.categoria=="anime");
        });

        animes.forEach(anime => {

            var elementomulti=`
                <div class="elementomilti" >
                    <h2>${anime.nombre}</h2>
                    <a href="#"><img src="imagenes/${anime.imagen}" width="150" height="180"></a>                                        
                </div>
            `;
            $("#contenedor").append(elementomulti); 
        });
    });   

})