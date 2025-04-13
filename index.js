const express=require('express');
const app=express();
const cors = require('cors')
const port=3005; 
app.use(express.json());
app.use(cors)
const RoutersApi = require('./routers/routers')
const { LogErrors, ErrorHandler, BoomErrorHandler } = require('./middlewares/error.handler')

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
app.use(LogErrors)
app.use(ErrorHandler)
app.use(BoomErrorHandler)

app.listen(port, () => {
    console.log(`Escuchando el puerto: http://localhost:${port}`);
  });


module.exports= RoutersApi;
