'use strict'

var express = require('express');
var  Usuario = require('../models/user.model');
var bcrytpt = require('bcryptjs');
var app = express();  

//Rutas


//Obtener todos los usuarios
app.get('/', (req, res, ) =>{
    Usuario.find({ },'nombre apellido email img role').exec(
    (err, result)=>{
        if(err) return res.status(500).send({'mensaje': 'No se pudieron recuperar los usuarios', 'error': err});
        res.status(200).send({
            ok: true,
            mensaje: 'Peticion Realizada Correctamente, ruta Usuario',
            Usuarios: result
        });
    });
});


//Obtener todos los usuarios
app.post('/', (req, res ) =>{
    
    var body = req.body;
    
    var usuario = new Usuario({
        nombre: body.nombre,
        apellido : body.apellido,
        email : body.email,
        img : body.img,
        password : bcrytpt.hashSync(body.password, 10),
        role : body.role
    });
    
    usuario.save((err, userSave)=>{
        if(err) return res.status(400).send({'mensaje': 'No se pudo crear el usuario', 'error': err});
    
        res.status(201).send({
            ok: true,
            mensaje: 'Peticion Realizada Correctamente, ruta Usuario',
            Usuario: userSave
        });
    });
});


module.exports = app;