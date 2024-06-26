const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

// Creamos el servidor
const app = express();

//Conectamos a la BD
conectarDB();
app.use(cors());

app.use(express.json());

app.use('/compras', require('./routes/compra'));

app.listen(5000, () => {
    console.log('El servidor está funcionando')
})