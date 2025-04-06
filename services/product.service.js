const faker = require('faker')



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
  
    find() {
      return this.products;
    }
  
    findOne(id) {
      return this.products.find(e => e.id === parseInt(id));
    }

    create(data) {
        const newProduct = {
            id: this.nextId++,
            ...data
        }
        this.products.push(newProduct)
        return newProduct
    }
  
    update(id, changes) {
        let index = this.products.findIndex(e => e.id === parseInt(id))

        if (index === -1) {
            throw new Error('Product not found') 
        } 
        
        const product = this.products[index]
        this.products[index]={
            ...product,
            ...changes
        }

        return this.products[index]
    }
  
    delete(id) {
        let productId  = parseInt(id)
        let index = this.products.findIndex(e => e.id === productId )

        if (index === -1) {
            throw new Error('Product not found') 
        } 
        this.products.splice(index, 1)
        return {productId}
    }

}
  
module.exports = ProductsService;