$(document).ready(function(){

    $.get('/listapublica', function(response){
        
        response.elemntosmulti.forEach((element, index)=>{

            var elementomulti=`
            <tr>
                <td scope="row" >${element.id_elementosmulti}</td>
                <td scope="row" >${element.nombre}</td>
                <td scope="row" >${element.categoria}</td>
                <td scope="row" >${element.genero}</td>
                <td scope="row" >${element.ano}</td>
                <td scope="row" ><img src="imagenes/${element.imagen}" width="50" height="70"></td>
                <td scope="row" >${element.capturas}</td> 
                <td scope="row" ><a href="user/eliminar/${element.id_elementosmulti}/${element.imagen}">Eliminar</a></td>                 
            </tr>
            `;
          $("#tbody").append(elementomulti);  
        });

    }); 

});
