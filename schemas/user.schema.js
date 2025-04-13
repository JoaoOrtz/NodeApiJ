const joi = require('joi')

const id = joi.number()
const name = joi.string().alphanum().min(3).max(41)
const limit = joi.number().integer().min(1)
const offset = joi.number().integer().min(1)

const CreateUserSchema = joi.object({
    name: name.required(),
    limit: limit.required(),
    offset: offset.required()
})

const UpdateUserSchema = joi.object({
    name: name,
    limit: limit,
    offset: offset
})

const getUserSchema = joi.object({
    id: id.required()
})

module.exports = {
    CreateUserSchema,
    UpdateUserSchema,
    getUserSchema
}