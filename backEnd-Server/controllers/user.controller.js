'use strict'

var User = require('../models/user.model');
var bcrypt = require('bcrypt-nodejs'); //para encriptar la contraseña
var jwt = require('../services/jwt.service');//servicio por el cual genero el token
//var mongoose_paginte = require('mongoose-pagination');
var fs = require('fs'); //metodo que permite subir archivos
var path = require('path'); //para reconocer la extensión de los archivos

function home(req, res) {
    res.status(200).send({
        message: 'Hola Mundo Desde EL Controlador De Usuario'
    });;
}

//Obtener todos los usuarios
function getUsers(req, res) {
    User.find({}, 'nombre apellido email img role').exec(
        (err, result) => {
            if (err) return res.status(500).send({
                'mensaje': 'No se pudieron recuperar los usuarios',
                'error': err
            });
            res.status(200).send({
                ok: true,
                mensaje: 'Peticion Realizada Correctamente, ruta Usuario',
                Usuarios: result
            });
        });
}

//Metodo para el registro de usuarios
function saveUser(req, res) {
    var params = req.body;
    var user = new User();
    user.nombre = params.nombre;
    user.apellido = params.apellido;
    user.email = params.email;
    user.image = null;
    /**
     * Para poder hacer busquedas por medio del OR se deben implementar de esta manera
     * resulta util cuando se quiere buscar un usuario por varios paramatros sin tener
     * la obligacion de que se cumplan todos!!
     * 
     *    
        User.findOne({ $or: [
            ***De esta manera se esta buscando al usuario por su email o por su nick***
            {email : user.email.toLowerCase()},
            {nick: user.nick.toLowerCase()}
        ]}).exec(function(err, users){
             });
     */
    //por medio de la libreria bcrypt y su metodo hash encripto una contraseña
    bcrypt.hash(params.password, null, null, (error, result) => {
        user.password = result;
        user.save((err, userSaved) => {
            if (err) {
                return res.status(400).send({
                    message: 'Error, No se ha podido guardar el usuario'
                });
            }
            res.status(200).send({
                user: userSaved
            });
        })
    });
}

function updateUser(req, res){
    var params = req.body;
    var id = req.params.id;
    delete params.password;
    User.findById(id, (err, result)=>{
        if(err) return res.status(500).send({mensaje: 'Error al buscar el usuario'});
        if(!result) return res.status(400).send({mensaje: 'El usuario con el Id ' + id+ ' no existe'});

        User.findByIdAndUpdate(id, params, {new : true}, (err, userUpdate)=>{
            if(err){
                res.status(500).send({
                    message: 'Error, no se ha podido realizar la peticion de actualizar el usuario!!'
                });
        } 
        if(!updateUser){
            return res.status(404).sen({
                message: 'Error, no se ha podido actualizar el usuario'
            });
        }
        return res.status(200).send({userUpdate});
        });

    }); 
}


function deleteUser(req, res){
    var id = req.params.id;

    User.findByIdAndDelete(id, (err, result)=>{
        if(err) return res.status(500).send({mensaje: 'Error al buscar el usuario'});
        if(!result) return res.status(400).send({mensaje: 'El usuario con el Id ' + id+ ' no existe'});
        return res.status(200).send({mensaje: 'Usuario eliminado con exito!', user: result});
    });
}

function login(req, res){
    var params = req.body;
    User.findOne({email: params.correo}, (err, result)  =>{
        if(err) return res.status(500).send({mensaje: 'Error al buscar el usuario'});
        if(!result) return res.status(400).send({mensaje: 'El usuario con el Id ' + id+ ' no existe'});
        if(bcrypt.compareSync(params.password, result.password)){
        var tokken = jwt.createTokken(result);
        result.password = undefined;
        return res.status(200).send({mensaje: 'Usuario logueado con exito!', user: result, tokken});  
        }else return res.status(400).send({mensaje: 'Contraseña y/o correo incorrectos'});
    });

    
    

}

module.exports = {
    home,
    getUsers,
    saveUser,
    updateUser,
    deleteUser,
    login
}