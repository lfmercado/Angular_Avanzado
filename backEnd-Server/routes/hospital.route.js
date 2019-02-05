'use strict'

var express = require('express');
var mdAuth = require('../middleweres/authenticated');
var multiparty = require('connect-multiparty');
var HospitalController = require('../controllers/hospital.controller');
//Rutas
var api = express.Router();

api.get('/get-hospitals', HospitalController.getHospitals);
api.get('/get-hospital/:id', HospitalController.getHospital);
api.post('/save-hospital',mdAuth.ensureAuth, HospitalController.saveHospital);
api.put('/update-hospital/:id',mdAuth.ensureAuth, HospitalController.updateHospital);
api.delete('/delete-hospital/:id',mdAuth.ensureAuth, HospitalController.deleteHospital);

module.exports = api;
