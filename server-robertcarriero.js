const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Soy Roberto Carriero en la clase del profe Sebastian');
});

app.listen(port, () => {
  console.log(`Server running at <http://localhost>:${port}/`);
});