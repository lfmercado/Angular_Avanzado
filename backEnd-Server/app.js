'use strict'
//Requires
var express = require('express');
var bodyParser = require('body-parser');

var fileUpload = require('express-fileupload');

//inicializar variables
var app = express();
app.use(fileUpload());

//Middlewares
app.use(bodyParser.urlencoded({extends:false}));
app.use(bodyParser.json());


//importar rutas
var userRoutes =  require('./routes/user.route');
var hospitalRoutes = require('./routes/hospital.route');
var medicoRoutes = require('./routes/medico.ruote');
var busquedaRoutes = require('./routes/busqueda.route');
var fileUploadRoutes = require('./routes/fileUpload.route');

//Rutas
app.use('/api', userRoutes);
app.use('/api', hospitalRoutes);
app.use('/api', medicoRoutes);
app.use('/api', busquedaRoutes);
app.use('/api', fileUploadRoutes);


//Cors
app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requestes-With, Content-Type, Accept, Access-Allow-Request-Method'); 
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, POST, PUT, DELETE');
    res.header('Allow', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});
module.exports = app;