'use strict';

require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const { PORT } = process.env;

app.use(fileUpload());
// Para recibir datos como JSON en el BODY
app.use(express.json());
// CORS - Para dar permisos de acceso a otras url's
app.use(cors());
// To serve static files => Archivos públicos.
app.use(express.static('public'));

const usersRouter = require('./app/routes/user-routes');

// ESTO ESTA COMENTADO PORQUE FALTA CREAR EL ENDPOINT ENTERO
// app.use('/api/v1/users/', usersRouter);

app.listen(PORT, () => console.log('Running', PORT));
