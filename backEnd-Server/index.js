'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
                //Conexion a la base de datos
mongoose.connect('mongodb://localhost:27017/hospitalDB', { useNewUrlParser: true })
        .then(()=>{
            console.log('Conexion a la base de datos se ha realiazado con exito!!');
            //Creando conexion al servidor
            app.listen(port, ()=>{
                console.log('\x1b[32m%s\x1b[0m ', 'Express server corriendo en el puerto: 3800');
            })
        })
        .catch( err =>console.log(err));