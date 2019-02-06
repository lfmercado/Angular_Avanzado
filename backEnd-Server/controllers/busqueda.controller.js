'use strict'
var Hospital = require('../models/hospital.model');
var Medico = require('../models/medico.model');
var User = require('../models/user.model');

function busquedaEspecifica(req, res){
    var tabla = req.params.tabla;
    var busqueda = req.params.busqueda;
    var regex = new RegExp(busqueda, 'i');
    var promesa;
    switch (tabla) {
        case 'usuarios':
            promesa = buscarUsuarios(busqueda, regex);            
            break;
        case 'hospitales':
            promesa = buscarHospitales(busqueda, regex);
            break;
        case 'medicos':
            promesa = buscarMedicos(busqueda, regex);
            break;
        default:
            return res.status(400).send({
                mensaje: 'Busqueda no permitida',
                err : 'tabla/coleccion no valida'
            });
            break;
    }

    promesa.then( data =>{
        return res.status(200).send({
            ok: 'true',
            [tabla]: data
        });
    });

}



function buscarTodo(req, res){
    var busqueda = req.params.busqueda;
   
    if(busqueda.length < 3){
        return res.status(400).send({mensaje:'busqueda de minimo 3 caracteres'})
    }

    var regex = new RegExp(busqueda, 'i');

    Promise.all([buscarHospitales(busqueda, regex), buscarMedicos(busqueda, regex), buscarUsuarios(busqueda, regex)])
            .then(response =>{
                res.status(200).send({
                    hospitales: response[0],
                    medicos: response[1],
                    usuarios: response[2]
                })
            });
}

function buscarHospitales(busqueda, regex){
    return new Promise((resolve, reject)=>{
         Hospital.find({nombre: regex}).populate('usuario', '_id nombre email').populate('hospital')
         .exec( (err, hospitales)=>{
        if(err) reject('Error al buscar hospitales');
        resolve(hospitales);
    });
});  
}

function buscarMedicos(busqueda, regex){
    return new Promise((resolve, reject)=>{
         Medico.find({nombre: regex}).populate('hospital')
         .exec( (err, hospitales)=>{
        if(err) reject('Error al buscar hospitales');
        resolve(hospitales);
    });
});  
}

function buscarUsuarios(busqueda, regex){
    return new Promise((resolve, reject)=>{
         User.find({}, 'nombre email role')
         .or([ {'nombre': regex}, {'email': regex}])
            .exec((err, Usuarios)=>{
                if(err) reject('No se han podido buscar los usuarios', err);

                resolve(Usuarios)
            });

    }); 
}

module.exports ={ 
    buscarTodo,
    busquedaEspecifica
}