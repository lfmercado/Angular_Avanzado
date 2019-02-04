'use strict'

var User = require('../models/user.model');
var bcrypt = require('bcrypt-nodejs');//para encriptar la contraseña
//var jwt = require('../services/jwt.service');//servicio por el cual genero el token
//var mongoose_paginte = require('mongoose-pagination');
var fs = require('fs');//metodo que permite subir archivos
var path = require('path');//para reconocer la extensión de los archivos

function home(req, res){
    res.status(200).send({
        message : 'Hola Mundo Desde EL Controlador De Usuario'
    });;
}

function prueba (req, res ){
    res.status(200).send({
        message : 'Hola desde el api!!'
    });
}

//Metodo para el registro de usuarios
function saveUser (req, res){
    var params = req.body;
    var user = new User();
   
    //Reviso que si tenga todos los campos requeridos
    if(params.name && params.surname && params.nick && params.email && params.password){
        user.name = params.name;
        user.surname = params.surname;
        user.nick = params.nick;
        user.email = params.email;
        user.profession = null;
        user.description = null;
        user.role = 'ROLE_USER';
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

         // Controlar los usuarios para que no se registren con el mismo correo
        User.findOne({email : user.email.toLowerCase()}).exec(function(err, users){
            
            if(err){
                 res.status(500).send({
                    message:'Error en la peticion de busqueda de usuarios repetidos'
                });
            }else{
                if(users && users.email)
                {
                 res.status(200).send({
                        message: 'No se puede crear el usuario, el correo ya se encuentra en uso!!'
                    });
                }
                else{
                    //por medio de la libreria bcrypt y su metodo hash encripto una contraseña
                    bcrypt.hash(params.password,null,null, (error, result)=>{
                        user.password = result;
                        user.save((err, userSaved) =>{
                            if(err){
                                return res.status(500).send({
                                    message: 'Error, No se ha podido guardar el usuario'
                                });
                            }else{
                                if(userSaved){
                                    
                                    res.status(200).send({
                                        user: userSaved
                                    });
                                }else{
                                    res.status(404).send({
                                        message: 'No se ha podido registrar el usuario'
                                    });
                                }
                            }
                        })
                    });
                }
            }
        }); 
    }else{
        res.status(200).send({
            message: 'Es obligatorio completar todos los campos!!'
        });
    }
}
