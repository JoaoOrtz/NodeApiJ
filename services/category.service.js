const faker = require('faker')
const boom = require('@hapi/boom')

class CategoriesService {
    constructor() {
      this.categories = [];
      this.nextId = 1
      this.generate();
    }
  
    generate() {
        const limit = 100;

        for (let i = 0; i < limit; i++) {
            this.categories.push({
                id: this.nextId++,
                name: faker.commerce.productName(),
                catId: Math.floor(Math.random() * 100) + 1, 
                prodId: Math.floor(Math.random() * 100) + 1
            });
        }
    }
  
    async find() {
        if (this.categories.length === 0) {
            throw boom.notFound('Categories not found') 
        }
      return this.categories;
    }
  
    async findOne(id) {
        const category = this.categories.find(e => e.id === parseInt(id));
        if (!category) {
            throw boom.notFound('Category not found') 
        }
      return category
    }

    async create(data) {
        const newCategory = {
            id: this.nextId++,
            ...data
        }
        this.categories.push(newCategory)
        return newCategory
    }
  
    async update(id, changes) {
        let index = this.categories.findIndex(e => e.id === parseInt(id))

        if (index === -1) {
            throw boom.notFound('Category not update') 
        } 
        
        const category = this.categories[index]
        this.categories[index]={
            ...category,
            ...changes
        }

        return this.categories[index]
    }
  
    async delete(id) {
        let categoryId  = parseInt(id)
        let index = this.categories.findIndex(e => e.id === categoryId )

        if (index === -1) {
            throw boom.notFound('Category not delete') 
        } 
        this.categories.splice(index, 1)
        return {categoryId}
    }

}
  
module.exports = CategoriesService;