const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');


const clientes = express();
const port = 80;

// Middleware para parsear el cuerpo de las solicitudes
clientes.set('port', process.env.PORT || port);
clientes.use(bodyParser.urlencoded({ extended: true }));
clientes.use(bodyParser.json());
clientes.use(express.static('/'));


const server = http.createServer(clientes);





server.listen(clientes.get('mensaje'), () => {
  console.log(`Clientes escuchando en http://localhost:${clientes.get('port')}`);
});

module.exports = clientes;