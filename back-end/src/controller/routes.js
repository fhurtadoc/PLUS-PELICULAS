//imports
const express=require("express");
const router=express.Router();
const elementomulti=require("../controller/controlador");


var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: "./src/public/imagenes"});



// get 
router.get('/lista', elementomulti.findAll);
router.get('/buscar/:id',elementomulti.findById);

//post
///Ruta con el midleware como se crea un elemento nuevo este debe cargar la imagen la extension se debe validar es en el front end 
//El mutltypart tambien coge la imagen y los datos ya que a el solo le importa la imagen por eso no genera problema    
router.post('/nuevo', multipartMiddleware,elementomulti.create); 


//put 
router.post('/editar/:id', elementomulti.update);

// delete 
router.get('/eliminar/:id/:imagen', elementomulti.delete);



module.exports=router;