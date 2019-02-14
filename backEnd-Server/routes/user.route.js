'use strict'

var express = require('express');
var mdAuth = require('../middleweres/authenticated');
var multiparty = require('connect-multiparty');
var UserController = require('../controllers/user.controller');
//Rutas
var api = express.Router();
api.get('/home', UserController.home);
api.get('/get-users',mdAuth.ensureAuth, UserController.getUsers);
api.post('/save-user', UserController.saveUser);
api.put('/update-user/:id',mdAuth.ensureAuth, UserController.updateUser);
api.delete('/delete-user/:id',mdAuth.ensureAuth, UserController.deleteUser);
api.post('/login', UserController.login);
api.post('/login-google', UserController.loginGoogle);
module.exports = api;

