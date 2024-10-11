const cliente = require('./clientes');
const port = cliente.get('port');

// Iniciar el servidor
cliente.listen(port, () => {
  console.log(`Clientes escuchando en http://localhost:${port}`);
});

// Ruta básica
cliente.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});