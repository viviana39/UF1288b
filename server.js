const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const port = 80;

// Middleware para parsear el cuerpo de las solicitudes
server.set('port', process.env.PORT || port);
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(express.static('/'));

server.get('/mensaje', (req, res) => {
    console.log(`texto: ${req.query.texto}`)
    res.send("OK")
});

server.listen(port, () => {
    console.log(`server escuchando en http://localhost puerto:${port}`)
})