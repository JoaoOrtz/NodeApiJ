const joi = require('joi')


const id = joi.number()
const name = joi.string().alphanum().min(3).max(41)
const price = joi.number().integer().min(1)
const image = joi.string().uri()

const CreateProductSchema = joi.object({
    name: name.required(),
    price: price.required(),
    image: image.required()
})

const UpdateProductSchema = joi.object({
    name: name,
    price: price,
    image: image
})

const getProductSchema = joi.object({
    id: id.required()
})

module.exports = {
    CreateProductSchema,
    UpdateProductSchema,
    getProductSchema
}