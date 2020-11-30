const elementomulti = require("../modelo/elementomulti");
const imagen=require("../modelo/imagen");
const Elementomulti = require("../modelo/elementomulti");
var fs = require('fs');
const path=require("path");
const { Console } = require("console");
const { request } = require("http");


// Listar todos los objetos
exports.findAll=function(req,res){

    elementomulti.findAll((err, elemntosmulti)=>{
        
        if(err){
            res.send(err);
        }
        console.log(err, elemntosmulti);
        res.send({elemntosmulti});
    });

};

// guardar nuevo elemento multimedia 

exports.create=function(req, res){ 

    //Los datos normales
    let params=req.body;

    //Los datos de la imagen
    let img_id=req.files.imagen;

    var filePath = req.files.imagen.path;
    console.log(filePath);
    var fileSplit = filePath.split('\\');
    var fileName = fileSplit[3];

    //Ahora remplazamos el parametro imagen por el filename del mutiparty
    params.imagen = fileName;

    //El proceso que sigue
    let newElementomulti= new elementomulti(params);
    if(req.body.contructor=== Object && Object.keys(req.body).length===0){
        res.status(400).send({error:true, message: "proporcione todos los campos requeridos"});
    }else{
        elementomulti.create(newElementomulti, (err, elementomulti)=>{
            if(err){
                res.send(err);
            }
            res.json({error:false,message:"elementomulti agredado", data:elementomulti });
        });
    }
};

// buscar por id 

exports.findById=function(req, res){

    elementomulti.findbyid(req.params.id, (err, elementomulti)=>{
        if(err){
            res.send(err);
        }
        res.render("elementoid", {elemento:(elementomulti)}); 
        //res.render("user/editar"); 
        //res.json(elementomulti); //json(elementomulti);
        
    });
}; 

// editar elementos multimedia 

exports.update=function(req, res){
    if(req.body.contructor=== Object && Object.keys(req.body).length===0){
        res.status(400).send({erro:true, message: "por favor ingrese todos los datos requeridos"});
        
    }else{
        elementomulti.update(req.params.id, new elementomulti (req.body), (err,elementomulti)=>{
            if(err){
                res.send(err);
            }else{
                res.json({
                    error:false, 
                    message: "elemento cargado con exito" +elementomulti
                });

            }

        });
    }
};

// eiminar elementos multimedias

exports.delete=function(req, res){    
    var imagen=req.params.imagen;        
    var namePath=path.join(__dirname, '../public/imagenes/'+imagen);
    fs.unlink(namePath, (err) => {
        elementomulti.delete(req.params.id, (err, elementomulti)=>{        
            if(err){
                res.send(err);
            }res.json({
                error:false, 
                message: "elemento cargado con exito" +elementomulti
            });
        });
    });    
};

