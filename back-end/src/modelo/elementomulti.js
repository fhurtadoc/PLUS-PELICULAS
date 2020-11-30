'use strict'
var pool =require("../database");
const imagen=require("../modelo/imagen");

// creamos nuestro objeto domain con sus propiedades
var Elementomulti=function(elementomulti){

    this.nombre = elementomulti.nombre;
    this.genero = elementomulti.genero;
    this.categoria = elementomulti.categoria;
    this.ano = elementomulti.ano;
    this.imagen = elementomulti.imagen;
    this.descripcion = elementomulti.descripcion;
    this.capturas = elementomulti.capturas;
};

// nuestros metodos DAO 

const INSERT=("INSERT INTO elementosmulti set?");
const SELECT=("SELECT * from elementosmulti where id_elementosmulti = ?");
const LIST=("SELECT * from elementosmulti");
const UPDATE=("UPDATE elementosmulti SET nombre=? genero=? categoria=?" 
+"ano=? imagen=? descripcion=? capturas=? WHERE id_elementosmulti = ?" );
// upload imagen es para subir las imagenes cuando vaya a editar un elemento multimedia
// la consulta a a traer un string con el path de la img y trera un id  
//y va a modificar el id elemento multimedia con ese id 
const UPDATEIMAGE= ("UPDATE elementosmulti SET imagen=? WHERE id_elementosmulti = ?");
const DELETE=("DELETE FROM elementosmulti WHERE id_elementosmulti = ?")

Elementomulti.create=function( newElem, result){
    pool.query(INSERT, newElem, (err, res)=>{

        if(err){
            console.log("error:", err);
            result(err, null); 
        }else{
            console.log(res.insertId);
            result(null, res.insertId);
        }        
    });
};

Elementomulti.findbyid=function(id, result){
    pool.query(SELECT, id, (err,res)=>{

        if(err){
            console.log("error:", err);
            result(err, null);
        }else{
            result(null, res);
        }        

    });
};
Elementomulti.findAll=function(result){
    pool.query(LIST, (err, res)=>{
        if(err){
            console.log("error:",err);
            result (null, res);
        }
        else{
            console.log("elementomulti:", res)
            result(null, res);
        }
    });
};
Elementomulti.update= function( elementomulti, result){
    pool.query(UPDATE, [elementomulti.nombre, elementomulti.genero, elementomulti.categoria, elementomulti.ano,
        elementomulti.imagen, elementomulti.descripcion, elementomulti.capturas, elementomulti.id_elementosmulti], (err,res)=>{

        if(err){
            console.log("error:", err);
            result(null, err);
        }else{
            result(null, res);
        }

    });
};

Elementomulti.updateImage = function(id, image){
    
    //pool.escape es para que lo vuelva un string ya que el valor puede dañar la consulta 
    let imagenLimpia = pool.escape(image + ''); 
    let idLimpio = pool.escape(id + '');
    pool.query(UPDATEIMAGE, [imagenLimpia, idLimpio], (err,res)=>{
        let response;
        if(err){
            console.log(err);
        }else{
            response = res;
        }
    });
}


Elementomulti.delete= function(id, result){
    pool.query(DELETE, id, (err,res)=>{

        if(err){
            console.log("error:", err);
            result(null, err);
        }else{
            result(null, res);
        }

    });
};

module.exports=Elementomulti;