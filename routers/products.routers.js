const express=require('express');
const faker = require('faker')
const router=express.Router();
const ProductService = require('../services/product.service')
const service = new ProductService()


// Metodos get
router.get("/", (req, res) => {
    const products = service.find()
    res.json(products)
});

router.get('/filtro', (req, res) => {
    res.send('Soy un filtro');
  });

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const product = service.findOne(id)
    res.json(product)
});



// Metodo post
router.post('/', (req, res) => {
    const body = req.body;
    const newProduct = service.create(body)
    res.status(201).json(newProduct)
});


// Metodo patch
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    
    const updateProduct = service.update(id, body)
    res.json(updateProduct);
});


// Metodo delete
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const deleteProduct = service.delete(id)
    res.json(deleteProduct);
});

module.exports = router;