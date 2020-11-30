$(document).ready(function(){

    
    $.get('/listapublica', function(response){
        
        response.elemntosmulti.forEach((element, index)=>{

            var elementomulti=`
                <div class="elementomilti" >
                    <h2>${element.nombre}</h2>
                    <a href="/${element.id_elementosmulti}"><img src="imagenes/${element.imagen}" width="150" height="180"></a>                    
                </div>
            `;
          $("#contenedor").append(elementomulti);  
        });

    }); 

});
