'use strict'

var Medico = require('../models/medico.model');

//var mongoose_paginte = require('mongoose-pagination');
var fs = require('fs'); //metodo que permite subir archivos
var path = require('path'); //para reconocer la extensión de los archivos


//Obtener todos los usuarios
function getMedicos(req, res) {
    var desde = req.query.desde || 0;
    desde = Number(desde);
    Medico.find({}).skip(desde).limit(5).populate('usuario', '_id nombre email').populate('hospital').exec(
        (err, result) => {
            var desde = req.query.desde || 0;
            desde = Number(desde);
            if (err) return res.status(500).send({
                'mensaje': 'No se pudieron recuperar los medicoes',
                'error': err
            });

            Medico.count((err, count) =>{
                if (err) return res.status(500).send({
                    'mensaje': 'No se pudieron recuperar los hospitales',
                    'error': err
                });
                return res.status(200).send({
                    ok: true,
                    totalMedicos: count,
                    mensaje: 'Peticion Realizada Correctamente',
                    Medico: result,
                }); 
            });         
        });
}

function saveMedico(req, res){
    var params = req.body;
    var medico = new Medico();
    medico.nombre = params.nombre;   
    medico.apellido = params.apellido;
    medico.cedula = params.cedula;
    medico.usuario = req.user.sub; //Id que toma el backend por medio del token
    medico.hospital = params.hospital;
    medico.img = null;
    medico.save((err, result) =>{
        if(err) return res.status(500).send({mensaje:'Error al guardar el medico' , err})
        if(!result) return res.status(500).send({mensaje:'No se pudo guardar el medico' , err})
        return res.status(200).send({
            ok: true,
            mensaje: 'Peticion Realizada Correctamente, medico creado',
            Medico: result,
        });
    });
}

function updateMedico(req, res){
    var params = req.body;
    var id = req.params.id;

    Medico.findByIdAndUpdate(id, params, {new : true}, (err, result) =>{
        if(err) return res.status(500).send({mensaje:'Error al actualizar el medico' , err})
        res.status(200).send({
            ok: true,
            mensaje: 'Peticion Realizada Correctamente, medico actualizado',
            Medico: result,
        });
    });
}


function deleteMedico(req, res){
    var id = req.params.id;

    Medico.findByIdAndRemove(id, (err, result) =>{
        if(err) return res.status(500).send({mensaje:'Error al actualizar el medico' , err})
        res.status(200).send({
            ok: true,
            mensaje: 'Peticion Realizada Correctamente, medico eliminado',
            Medico: result,
        });
    });
}

function getMedico(req, res) {
    var id = req.params.id;
    Medico.findById(id,(err, result) => {
            if (err) return res.status(500).send({
                'mensaje': 'No se pudieron recuperar los medicoes',
                'error': err
            });
           return res.status(200).send({
                ok: true,
                mensaje: 'Peticion Realizada Correctamente',
                Medico: result,
            });
        });
}

module.exports = {
    getMedicos,
    getMedico,
    saveMedico,
    updateMedico,
    deleteMedico
}