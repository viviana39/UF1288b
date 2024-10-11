module.exports = (clientes) => {
    clientes.get('/', (req, res) => {
      // Redirige a la página de inicio de sesión
      res.redirect('/login.html');
    });
  
    clientes.get('/clientes', (req, res) => {
      const usuario = Number(req.query.usuario);
      const medida = Number(req.query.medida);
      const clientesString = `${usuario}-${medida}`;
  
      console.log(usuario);
      console.log(medida);
  
      // Puedes agregar más lógica aquí si es necesario
      res.send(`Usuario: ${usuario}, Medida: ${medida}, NutrikalString: ${nutrikalString}`);
    });
  };