'use strict'
//Requires
var express = require('express');
var bodyParser = require('body-parser');

var fileUpload = require('express-fileupload');

//inicializar variables
var app = express();
app.use(fileUpload());

//Middlewares
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//server index es para poder visualizar toda un directorio con los archivos.
//var serveIndex = require('serve-index');
//app.use(express.static(__dirname + '/'))
//app.use('/fileUploads', serveIndex(__dirname + '/fileUploads'));


//importar rutas
var userRoutes =  require('./routes/user.route');
var hospitalRoutes = require('./routes/hospital.route');
var medicoRoutes = require('./routes/medico.ruote');
var busquedaRoutes = require('./routes/busqueda.route');
var fileUploadRoutes = require('./routes/fileUpload.route');
var imagenesRoutes = require('./routes/imagenes.route');

//Rutas
app.use('/api', userRoutes);
app.use('/api', hospitalRoutes);
app.use('/api', medicoRoutes);
app.use('/api', busquedaRoutes);
app.use('/api', fileUploadRoutes);
app.use('/api', imagenesRoutes);

//Cors
app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requestes-With, Content-Type, Accept, Access-Allow-Request-Method'); 
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, POST, PUT, DELETE');
    res.header('Allow', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});
module.exports = app;