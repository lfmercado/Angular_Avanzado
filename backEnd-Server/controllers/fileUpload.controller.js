'use strict'

var Hospital = require('../models/hospital.model');
var Medico = require('../models/medico.model');
var User = require('../models/user.model');
var fs= require('fs');
var express = require('express');
var fileUpload = require('express-fileupload');
var app = express();
app.use(fileUpload());
 
function subirImagen(req, res){
    
    if(!req.files){
       return res.status(400).json({mensaje: 'Error no se ha subido ningun archivo, no hay archivo'});
    }
    var archivo = req.files.imagen;
    var nombreCort = archivo.name.split('.');
    var extencionArchivo = nombreCort[nombreCort.length - 1];  
    var extencionesValidas = ['png', 'jpg', 'jpeg','gif', 'PNG'];
    var tiposValidos = ['medicos', 'users', 'hospitales'];
    //Verificar la extension del archivo
    if(extencionesValidas.indexOf(extencionArchivo) < 0){
        return res.status(400).send({mensaje: 'Extension no valida'});
    }
    var id = req.params.id;
    var tipo = req.params.tipo;
    //Dar un nombre al archivo
    var nombreArchivo =  `${id}-${new Date().getMilliseconds()}.${extencionArchivo}`;
    
    //mover el archivo a un PATH
    var path = `./uploads/${tipo}/${nombreArchivo}`;
    //Verificar que solo se guarden segun el tipo de coleccion
    if(tiposValidos.indexOf(tipo) < 0){
        return res.status(400).send({mensaje: 'Tipo de coleccion no valida'});
    }
    
    archivo.mv(path, err =>{
        if(err)   return res.status(400).send({mensaje: 'Error no se ha subido ningun archivo'});

        subirPorTipo(tipo, id, nombreArchivo, res);
    });
}

function subirPorTipo(tipo, id, nombreArchivo, res){
    if(tipo === 'users'){
        User.findById(id, (err, usuario)=>{
            if(err) return res.status(400).send({mensaje:'Error al buscar usuario', err});
            if(!usuario) return res.status(400).send({mensaje:'Error al buscar usuario', err});
            var pathViejo = './uploads/users/' + usuario.img;
            //Si ya tiene una imagen la elimina
            if(fs.existsSync(pathViejo)){
                fs.unlink(pathViejo, (err)=>{
                    if(err) return res.status(400).send({mensaje:'no se pudo borrar la imagen del usuario', err});
                });
            } 

            usuario.img = nombreArchivo;
            usuario.save((err, userActualizado)=>{
                if(err) return res.status(400).send({mensaje:'Error al actualizar usuario', err});

                return   res.status(200).send({mensaje: 'El archivo se ha guardado satisfactoriamente', user: userActualizado});

            });

        });
    }
    if(tipo === 'hospitales'){
        Hospital.findById(id, (err, hospital)=>{
            if(err) return res.status(400).send({mensaje:'Error al buscar hospital', err});
            if(!hospital) return res.status(400).send({mensaje:'Error al buscar el hospital', err});
            var pathViejo = './uploads/hospitales/' + hospital.img;
            //Si ya tiene una imagen la elimina
            if(fs.existsSync(pathViejo)){
                fs.unlink(pathViejo, (err)=>{
                    if(err) return res.status(400).send({mensaje:'no se pudo borrar la imagen del hospital', err});
                });
            } 

            hospital.img = nombreArchivo;
            hospital.save((err, hospitalAct)=>{
                if(err) return res.status(400).send({mensaje:'Error al actualizar hospital', err});

                return   res.status(200).send({mensaje: 'El archivo se ha guardado satisfactoriamente', user: hospitalAct});

            });

        });
    }
    if(tipo === 'medicos'){
        Medico.findById(id, (err, medico)=>{
            if(err) return res.status(400).send({mensaje:'Error al buscar medico', err});
            if(!medico) return res.status(400).send({mensaje:'Error al buscar medico', err});
            var pathViejo = './uploads/medicos/' + medico.img;
            //Si ya tiene una imagen la elimina
            if(fs.existsSync(pathViejo)){
                fs.unlink(pathViejo, (err)=>{
                    if(err) return res.status(400).send({mensaje:'no se pudo borrar la imagen del medico', err});
                });
            } 

            medico.img = nombreArchivo;
            medico.save((err, medicoAct)=>{
                if(err) return res.status(400).send({mensaje:'Error al actualizar medico', err});

                return   res.status(200).send({mensaje: 'El archivo se ha guardado satisfactoriamente', user: medicoAct});

            });

        });
    }
}


module.exports ={
    subirImagen
}