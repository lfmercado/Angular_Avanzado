'use strict'
//Requires
var express = require('express');
var bodyParser = require('body-parser');


//inicializar variables
var app = express();


//Middlewares
app.use(bodyParser.urlencoded({extends:false}));
app.use(bodyParser.json());


//Rutas
app.get('/', (req, res, next) =>{
    res.status(200).send({
        ok: true,
        mensaje: 'Peticion Realizada Correctamente'
    });
});


//Cors
app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requestes-With, Content-Type, Accept, Access-Allow-Request-Method'); 
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, POST, PUT, DELETE');
    res.header('Allow', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

//Escuchar peticiones
app.listen(3000, ()=>{
    console.log('\x1b[32m%s\x1b[0m ', 'Express server corriendo en el puerto: 3000');
});