'use strict'
var Hospital = require('../models/hospital.model');
var Medico = require('../models/medico.model');
var User = require('../models/user.model');

const fs= require('fs');
const path = require('path');

function img(req, res){
    var img = req.params.img;
    var tipo = req.params.tipo;
    var pathImgn = path.resolve( __dirname,`../uploads/${tipo}/${img}`);

    if(fs.exists(pathImgn)){
      return  res.sendFile(pathImgn);
    }
    else{
        var pathNoImgn = path.resolve( __dirname, `../assets/no-img.jpg`);
      return  res.sendFile(pathNoImgn);
    }

}

module.exports = {
img
}