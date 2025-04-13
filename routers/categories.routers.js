const express=require('express');
const router=express.Router();
const ValidatorHandler = require('../middlewares/validator.handler')
const { CreateCategorySchema, UpdateCategorySchema, getCategorySchema } = require('../schemas/category.schema');


const CategoryController = require('../controllers/category.controller')
const controller = new CategoryController()


// Metodos get
router.get("/", controller.getCategories);

router.get('/:id', ValidatorHandler(getCategorySchema, 'params'), controller.getCategory);

// Metodo post
router.post('/', ValidatorHandler(CreateCategorySchema, 'body'), controller.createCategory);

// Metodo patch
router.patch('/:id', ValidatorHandler(getCategorySchema, 'params'), ValidatorHandler(UpdateCategorySchema, 'body'), controller.updateCategory);

// Metodo delete
router.delete('/:id', ValidatorHandler(getCategorySchema, 'params'),controller.deleteCategory);

module.exports= router;