const ProductService = require('../services/product.service')

class ProductController {
    constructor() {
        this.service = new ProductService();

        // Bind explícito de todos los métodos
        this.getProducts = this.getProducts.bind(this);
        this.getProduct = this.getProduct.bind(this);
        this.createProduct = this.createProduct.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.filterProduct = this.filterProduct.bind(this);
    }

    async getProducts(req, res, next) {
        try {
            const products = await this.service.find();
            res.json(products);
            
        } catch (error) {
            next(error)   
        }
    }

    async getProduct(req, res, next) {
        try {
            const { id } = req.params;
            const product = await this.service.findOne(id);
            res.json(product);
            
        } catch (error) {
            next(error)
        }
    
    }

    async createProduct(req, res, next) {
        try {
            const body = req.body;
            const newProduct = await this.service.create(body);
            res.status(201).json(newProduct);
            
        } catch (error) {
            next(error)
        }
    }

    async updateProduct(req, res, next) {
        try {
            const { id } = req.params;
            const body = req.body;
            const updatedProduct = await this.service.update(id, body);
            res.json(updatedProduct);
        } catch (error) {
            next(error)
        }
    }

    async deleteProduct(req, res, next) {
        try {
            const { id } = req.params;
            const deletedProduct = await this.service.delete(id);
            res.json(deletedProduct);
        } catch (error) {
            next(error)
        }
    }

    // Método para la ruta de filtro
    filterProduct(req, res) {
        res.send('Soy un filtro');
    }
}

module.exports = ProductController