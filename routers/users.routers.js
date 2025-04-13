const express=require('express');
const router=express.Router();
const ValidatorHandler = require('../middlewares/validator.handler')
const { CreateUserSchema, UpdateUserSchema, getUserSchema } = require('../schemas/user.schema');

const UsersController = require('../controllers/user.controller')
const controller = new UsersController()


// Metodos get
router.get("/",controller.getUsers);

router.get('/:id', ValidatorHandler(getUserSchema, 'params'), controller.getUser);

// Metodo post
router.post('/', ValidatorHandler(CreateUserSchema, 'body'),controller.createUser);

// Metodo patch
router.patch('/:id', ValidatorHandler(getUserSchema, 'params'), ValidatorHandler(UpdateUserSchema, 'body'), controller.updateUser);

// Metodo delete
router.delete('/:id', ValidatorHandler(getUserSchema, 'params'), controller.deleteUser);

module.exports= router;