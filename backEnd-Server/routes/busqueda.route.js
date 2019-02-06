'use strict'

var express = require('express');
var mdAuth = require('../middleweres/authenticated');
var multiparty = require('connect-multiparty');
var BusquedaController = require('../controllers/busqueda.controller');
//Rutas
var api = express.Router();
api.get('/get-all/:busqueda', BusquedaController.buscarTodo);
api.get('/get-all/:tabla/:busqueda', BusquedaController.busquedaEspecifica);
//api.get('/get-medico/:id',BusquedaController.getMedico);
//api.post('/save-medico',mdAuth.ensureAuth, BusquedaController.saveMedico);
//api.put('/update-medico/:id',mdAuth.ensureAuth, BusquedaController.updateMedico);
//api.delete('/delete-medico/:id',mdAuth.ensureAuth, BusquedaController.deleteMedico);

module.exports = api;