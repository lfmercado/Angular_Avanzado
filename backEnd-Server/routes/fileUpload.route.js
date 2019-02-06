'use strict'
var express = require('express');
var mdAuth = require('../middleweres/authenticated');
var FileUploadController = require('../controllers/fileUpload.controller');
//Rutas
var api = express.Router();
api.post('/fileUploads/:tipo/:id',mdAuth.ensureAuth, FileUploadController.subirImagen);


module.exports = api;
