'use strict'

var express = require('express');
var mdAuth = require('../middleweres/authenticated');
var multiparty = require('connect-multiparty');
var MedicoController = require('../controllers/medico.controller');
//Rutas
var api = express.Router();
api.get('/get-medicos', MedicoController.getMedicos);
api.get('/get-medico/:id',MedicoController.getMedico);
api.post('/save-medico',mdAuth.ensureAuth, MedicoController.saveMedico);
api.put('/update-medico/:id',mdAuth.ensureAuth, MedicoController.updateMedico);
api.delete('/delete-medico/:id',mdAuth.ensureAuth, MedicoController.deleteMedico);

module.exports = api;
