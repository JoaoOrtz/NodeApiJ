const express=require('express');
const router=express.Router();
const ValidatorHandler = require('../middlewares/validator.handler')
const { CreateProductSchema, UpdateProductSchema, getProductSchema } = require('../schemas/product.schema');

const ProductController = require('../controllers/product.controller')
const controller = new ProductController()


// Metodos get
router.get("/", controller.getProducts);

router.get('/filtro', controller.filterProduct);

router.get('/:id', ValidatorHandler(getProductSchema, 'params'), controller.getProduct);

// Metodo post
router.post('/', ValidatorHandler(CreateProductSchema, 'body'), controller.createProduct);


// Metodo patch
router.patch('/:id', ValidatorHandler(getProductSchema, 'params'), ValidatorHandler(UpdateProductSchema, 'body'), controller.updateProduct);


// Metodo delete
router.delete('/:id', ValidatorHandler(getProductSchema, 'params'), controller.deleteProduct);

module.exports = router;