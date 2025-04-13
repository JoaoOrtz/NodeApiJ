const joi = require('joi')


const id = joi.number()
const name = joi.string().alphanum().min(3).max(41)
const catId = joi.number().integer().min(1)
const prodId = joi.number().integer().min(1)

const CreateCategorySchema = joi.object({
    name: name.required(),
    catId: catId.required(),
    prodId: prodId.required()
})

const UpdateCategorySchema = joi.object({
    name: name,
    catId: catId,
    prodId: prodId
})

const getCategorySchema = joi.object({
    id: id.required()
})

module.exports = {
    CreateCategorySchema,
    UpdateCategorySchema,
    getCategorySchema
}