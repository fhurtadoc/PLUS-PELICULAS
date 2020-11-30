let express =require("express");
let router=express.Router();
let path=require("path");
var fs = require('fs');
const elementomulti = require("../modelo/elementomulti");

// peticiones publicas
//HOME
router.get("/", (req, res)=>{
    res.render('index', {title: 'home plus peliculas'  });    
});

router.get("/listapublica", (req, res)=>{

    elementomulti.findAll((err, elemntosmulti)=>{
        if(err){
            res.send(err);
        }
        console.log(err, elemntosmulti);
        res.send({elemntosmulti});
    });
});

router.post("/login", (req, res)=>{

   var params=req.body;
   var usuario=params.usuario;
   var password=params.password;
   console.log(usuario);
   console.log(password);        

    if (usuario==="admin" && password==="1234"){
        res.render("user/interfaceuser");
    }else{
        res.render('index')
    }
});

//PELICULAS
router.get("/peliculas", (req, res)=>{
    res.render('peliculas', {title: 'peliculas' });    
});

// SERIES 
router.get("/series", (req, res)=>{
    res.render('series', {title: 'series' });    
});

// ANIMES
router.get("/animes", (req, res)=>{
    res.render('animes', {title: 'animes' });    
});

// LISTA DESEOS
router.get("/lista_deseos", (req, res)=>{
    res.render('deseos', {title: 'deseos' });    
});

//PAGS INDIVIDUALES 

router.get("/:id",(req, res)=>{
    
    elementomulti.findbyid(req.params.id, (err, elementomulti)=>{
        if(err){
            res.send(err);
        }        
        res.render("elementoid", {elemento: elementomulti});         
        //res.render("user/editar"); 
        //res.json(elementomulti); //json(elementomulti);        
    });

});



module.exports=router;
