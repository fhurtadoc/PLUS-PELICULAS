$(document).ready(function(){

    
    $.get('/listapublica', function(response){
        
        var series=response.elemntosmulti.filter(function(element){

            return(element.categoria == "serie");            
            
        });
        series.forEach(serie => {

            var elementomulti=`
                <div class="elementomilti">
                    <h2>${serie.nombre}</h2>
                    <a href="#"><img src="imagenes/${serie.imagen}" width="150" height="180"><a>                    
                </div>
            `;
            $("#contenedor").append(elementomulti); 
        });        

    });  

})
