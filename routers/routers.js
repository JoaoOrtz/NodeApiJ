const productsRouters = require('./products.routers')
const usersRouters = require('./users.routers')
const categoriesRouters = require('./categories.routers')
const express = require('express')

const RoutersApi = (app) =>{
    const router= express.Router()
    app.use('/api/v1',router)

    router.use('/products',productsRouters)
    router.use('/users',usersRouters)
    router.use('/categories',categoriesRouters)
}

module.exports = RoutersApi;