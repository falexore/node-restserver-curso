const jwt = require('jsonwebtoken');

//========================
//Veririficar Token
//=======================
let verificaToken = (req, res, next) => {

    let token = req.get('token'); //Autorization
    console.log('=====>>>> TOKEN:   ' + token);
    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            });
        }
        //console.log('DECODE: ' + decoded.data);
        req.usuario = decoded.usuario;
        next();
    });
};

//========================
//Veririficar Admin Role
//=======================
let verificaAdmin_Role = (req, res, next) => {

    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        });
    }
};

module.exports = {
    verificaToken,
    verificaAdmin_Role
}