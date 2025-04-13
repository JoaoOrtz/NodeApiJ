const CategoryService = require('../services/category.service')

class ProductController {
    constructor() {
        this.service = new CategoryService();

        // Bind explícito de todos los métodos
        this.getCategories = this.getCategories.bind(this);
        this.getCategory = this.getCategory.bind(this);
        this.createCategory = this.createCategory.bind(this);
        this.updateCategory = this.updateCategory.bind(this);
        this.deleteCategory = this.deleteCategory.bind(this);
    }

    async getCategories(req, res, next) {
        try {
            const categories = await this.service.find();
            res.json(categories);
        } catch (error) {
            next(error)
        }
    }

    async getCategory(req, res, next) {
        try {
            const { id } = req.params;
            const category = await this.service.findOne(id);
            res.json(category);
            
        } catch (error) {
            next(error)
        }
    
    }

    async createCategory(req, res, next) {
        try {
            const body = req.body;
            const newCategory = await this.service.create(body);
            res.status(201).json(newCategory);
            
        } catch (error) {
            next(error)
        }
    }

    async updateCategory(req, res, next) {
        try {
            const { id } = req.params;
            const body = req.body;
            const updatedCategory = await this.service.update(id, body);
            res.json(updatedCategory);
            
        } catch (error) {
            next(error)
        }

    }

    async deleteCategory(req, res, next) {
        try {
            const { id } = req.params;
            const deletedCategory = await this.service.delete(id);
            res.json(deletedCategory);
            
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ProductController