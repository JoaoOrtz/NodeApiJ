const faker = require('faker')
const boom = require('@hapi/boom');

class ProductsService {
    constructor() {
      this.products = [];
      this.nextId = 1
      this.generate();
    }
  
    generate() {
        const limit = 100;

        for (let i = 0; i < limit; i++) {
            this.products.push({
                id: this.nextId++,
                name: faker.commerce.productName(),
                price: Math.floor(Math.random() * 100) + 1, 
                image: faker.image.imageUrl() 
            });
        }
    }
  
    async find() {
        if (this.products.length === 0) {
            throw boom.notFound('Products not found') 
        }
      return this.products;
    }
  
    async findOne(id) {
        const product = this.products.find(e => e.id === parseInt(id));
        if (!product) {
            throw boom.notFound('Product not found') 
        }
      return product
    }

    async create(data) {
        const newProduct = {
            id: this.nextId++,
            ...data
        }
        this.products.push(newProduct)
        return newProduct
    }
  
    async update(id, changes) {
        let index = this.products.findIndex(e => e.id === parseInt(id))

        if (index === -1) {
            throw boom.notFound('Product not update') 
        } 
        
        const product = this.products[index]
        this.products[index]={
            ...product,
            ...changes
        }

        return this.products[index]
    }
  
    async delete(id) {
        let productId  = parseInt(id)
        let index = this.products.findIndex(e => e.id === productId )

        if (index === -1) {
            throw boom.notFound('Product not delete') 
        } 
        this.products.splice(index, 1)
        return {productId}
    }

}
  
module.exports = ProductsService;