'use strict'
var express = require('express');
//Rutas

const fs= require('fs');
const path = require('path');


var api = express.Router();
api.get('/imagen/:tipo/:img', (req, res)=>{
    var img = req.params.img;
    var tipo = req.params.tipo;
    var pathImgn = path.resolve( __dirname,`../uploads/${tipo}/${img}`);

    if(fs.existsSync(pathImgn))
    {
        return  res.sendFile(pathImgn);
    }
    else{
        var pathNoImgn = path.resolve( __dirname, `../assets/no-img.jpg`);
      return  res.sendFile(pathNoImgn);
    }

});


module.exports = api;
