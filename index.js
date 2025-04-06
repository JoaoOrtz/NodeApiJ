const express=require('express');
const app=express();
const port=3005; 
app.use(express.json());
const RoutersApi = require('./routers/routers')



app.get('/', (req, res) => {
    res.send('Esta es mi server de express');
  });
  
app.get('/nueva-ruta', (req, res) => {
    res.send('Esta es mi nueva ruta');
  });
  
app.get('/productos', (req, res) => {
    res.json([{name: 'Producto1', price: 100}, {name: 'Producto2', price: 200}]);
  });

RoutersApi(app)

app.listen(port, () => {
    console.log(`Escuchando el puerto: http://localhost:${port}`);
  });


module.exports= RoutersApi;
