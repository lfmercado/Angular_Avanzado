'use strict'

var Hospital = require('../models/hospital.model');

//var mongoose_paginte = require('mongoose-pagination');
var fs = require('fs'); //metodo que permite subir archivos
var path = require('path'); //para reconocer la extensión de los archivos

//Obtener todos los usuarios
function getHospitals(req, res) {
    Hospital.find({}).exec(
        (err, result) => {
            if (err) return res.status(500).send({
                'mensaje': 'No se pudieron recuperar los hospitales',
                'error': err
            });
           return res.status(200).send({
                ok: true,
                mensaje: 'Peticion Realizada Correctamente',
                Hospitales: result,
            });
        });
}

function saveHospital(req, res){
    var params = req.body;
    var hospital = new Hospital();
    hospital.nombre = params.nombre;
    hospital.img = null;
    hospital.usuario = req.user.sub; //Id que toma el backend por medio del token

    hospital.save((err, result) =>{
        if(err) return res.status(500).send({mensaje:'Error al guardar el hospital' , err})
        if(!result) return res.status(500).send({mensaje:'No se pudo guardar el hospital' , err})
        return res.status(200).send({
            ok: true,
            mensaje: 'Peticion Realizada Correctamente, hospital creado',
            Hospitales: result,
        });
    });
}

function updateHospital(req, res){
    var params = req.body;
    var id = req.params.id;

    Hospital.findByIdAndUpdate(id, params, {new : true}, (err, result) =>{
        if(err) return res.status(500).send({mensaje:'Error al actualizar el hospital' , err})
        res.status(200).send({
            ok: true,
            mensaje: 'Peticion Realizada Correctamente, hospital actualizado',
            Hospital: result,
        });
    });
}


function deleteHospital(req, res){
    var id = req.params.id;

    Hospital.findByIdAndRemove(id, (err, result) =>{
        if(err) return res.status(500).send({mensaje:'Error al actualizar el hospital' , err})
        res.status(200).send({
            ok: true,
            mensaje: 'Peticion Realizada Correctamente, hospital eliminado',
            Hospital: result,
        });
    });
}


function getHospital(req, res) {
    var id = req.params.id;
    Hospital.findById(id,(err, result) => {
            if (err) return res.status(500).send({
                'mensaje': 'No se pudieron recuperar los medicoes',
                'error': err
            });
           return res.status(200).send({
                ok: true,
                mensaje: 'Peticion Realizada Correctamente',
                Hospital: result,
            });
        });
}


module.exports = {
    getHospitals,
    getHospital,
    saveHospital,
    updateHospital,
    deleteHospital
}