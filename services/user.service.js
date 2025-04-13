const faker = require('faker')
const boom = require('@hapi/boom')

class UsersService {
    constructor() {
        this.users = [];
        this.nextId = 1
        this.generate();
    }

    generate() {
        const limit = 100;

        for (let i = 0; i < limit; i++) {
            this.users.push({
                id: this.nextId++,
                name: faker.commerce.productName(),
                limit: Math.floor(Math.random() * 100) + 1,
                offset: Math.floor(Math.random() * 100) + 1
            });
        }
    }

    async find() {
        if (this.users.length === 0) {
            throw boom.notFound('Users not found') 
        }
        return this.users;
    }

    async findOne(id) {
        const user =  this.users.find(e => e.id === parseInt(id));
        if (!user) {
            throw boom.notFound('User not found')
        }
        return user
    }

    async create(data) {
        const newUser = {
            id: this.nextId++,
            ...data
        }
        this.users.push(newUser)
        return newUser
    }

    async update(id, changes) {
        let index = this.users.findIndex(e => e.id === parseInt(id))

        if (index === -1) {
            throw boom.notFound('User not update')
        }

        const user = this.users[index]
        this.users[index] = {
            ...user,
            ...changes
        }

        return this.users[index]
    }

    async delete(id) {
        let userId = parseInt(id)
        let index = this.users.findIndex(e => e.id === userId)

        if (index === -1) {
            throw boom.notFound('User not delete')
        }
        this.users.splice(index, 1)
        return { userId }
    }

}

module.exports = UsersService;