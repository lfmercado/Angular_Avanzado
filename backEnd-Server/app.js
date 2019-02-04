'use strict'
//Requires
var express = require('express');
var bodyParser = require('body-parser');


//inicializar variables
var app = express();


//Middlewares
app.use(bodyParser.urlencoded({extends:false}));
app.use(bodyParser.json());


//importar rutas
var appRoutes = require('./routes/appRoute');
var userRoute =  require('./routes/usuarioRoute');


//Rutas
app.use('/', appRoutes);
app.use('/user', userRoute);



//Cors
app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requestes-With, Content-Type, Accept, Access-Allow-Request-Method'); 
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, POST, PUT, DELETE');
    res.header('Allow', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});
module.exports = app;