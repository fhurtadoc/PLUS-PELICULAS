//imports
const morgan=require("morgan");
const express=require("express");
const session=require("express-session");
const bodyParser = require('body-parser');
const interUser=require("./controller/routes");
const expres_hbs=require("express-handlebars");
const path=require("path");
const { dirname } = require("path");
const http = require("http");
 




// 1. inicio la aplicacion
let app=express();

// 2. configuracion del servidor 
app.set("port", process.env.PORT || 4000 );
app.set('views', path.join(__dirname, 'vista'));
app.set('view engine', 'ejs');

// 3. Middlewares

app.use(morgan("dev"));
//body parse para convertir http a json
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session({
    secret: "esto es secreto",
    resave: true,
    saveUninitialized: true
}))

// 4.rutas

app.use(require("./controller/index"));
app.use('/user', interUser );

// 5. inicializacion del servidor 

app.listen(app.get("port"), ()=>{    
    console.log(`"ejecutando en el puerto", ${app.get('port')}`);
});

//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));


// cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');    
    next();
});



