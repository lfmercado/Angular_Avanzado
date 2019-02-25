'use strict'

var mongoose = require('mongoose');
var uniqueValidator  = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var rolesValidos ={
    values : ['ADMIN_ROLE','USER_ROLE'],
    message: '{VALUE} no es un rol permitido'
}

var userSchema = new Schema({
    nombre: {type: String, required:[true, 'El nombre es un campo obligatorio'] },
    apellido: {type: String, required:[true, 'El apellido es un campo obligatorio'] },
    password: {type: String, required:[true, 'La contraseña es un campo obligatorio'] },
    email: {type: String, unique:true, required:[true, 'El correo es un campo obligatorio'] },
    img: {type: String, required:false},
    role: {type: String, required:[true, 'El rol es un campo obligatorio'], default: 'USER_ROLE', enum:rolesValidos },
    google: {type: Boolean, default: false}
});

userSchema.plugin(uniqueValidator, {mensaje: '{PATH} debe de ser unico'});

module.exports = mongoose.model('Usuario', userSchema)