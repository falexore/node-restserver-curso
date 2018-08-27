const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;


let categoriaSchema = new Schema({
    descripcion: {
        type: String,
        unique: true,
        required: [true, 'Descripcion de categoria es necesario']
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
});

// categoriaSchema.methods.toJSON = function() {

//     let user = this;
//     let userObject = user.toObject();
//     delete userObject.password;
//     return userObject;

// }
//categoriaSchema.plugin(uniqueValidator, { message: '{PATH} Debe de ser único' });


module.exports = mongoose.model('Categoria', categoriaSchema);