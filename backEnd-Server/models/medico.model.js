var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator  = require('mongoose-unique-validator');

var medicoSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre	es obligatorio']
    },
    apellido: {
        type: String,
        required: [true, 'El apellido es obligatorio']
    },
    cedula: {
        type: String,
        required: true,
        unique:true
    },
    img: {
        type: String,
        required: false
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    hospital: {
        type: Schema.Types.ObjectId,
        ref: 'Hospital',
        required: [true, 'El id	hospital es un campo obligatorio']
    }
});

medicoSchema.plugin(uniqueValidator, {mensaje: '{PATH} debe de ser unico'});
module.exports = mongoose.model('Medico', medicoSchema);