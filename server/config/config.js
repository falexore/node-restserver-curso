//=======================
//puerto
//======================


process.env.PORT = process.env.PORT || 3000;

//=======================
//Entorno
//======================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//=======================
// Vencimiento del Token
//======================
//60 segundos
//60 minutos
//24 horas
//30 días.

process.env.CADUCIDAD_TOKEN = '48h';

//=======================
// SEED de autenticacion
//======================

process.env.SEED = process.env.SEED || 'secret';



//=======================
// Base de datos
//======================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;


//=======================
// Google client ID
//======================
process.env.CLIENT_ID = process.env.CLIENT_ID || '924540585443-7ot3sr340mdju6l11jkh35ot0qd605hj.apps.googleusercontent.com'