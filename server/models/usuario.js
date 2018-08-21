const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol valido'
};

let Schema = mongoose.Schema;

let usuarioScehma = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']

    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El correo es necesario']
    },
    password: {
        type: String,
        required: [true, 'Contraseña es obligatoria']
    },
    img: {
        type: String,
        required: false
    }, //no es obligatoria
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos
    }, //default: 'USER_ROLE'
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

usuarioScehma.methods.toJSON = function() {

    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;

}
usuarioScehma.plugin(uniqueValidator, { message: '{PATH} Debe de ser único' });


module.exports = mongoose.model('Usuario', usuarioScehma);