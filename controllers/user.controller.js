const UserService = require('../services/user.service')

class UserController {
    constructor() {
        this.service = new UserService();

        // Bind explícito de todos los métodos
        this.getUsers = this.getUsers.bind(this);
        this.getUser = this.getUser.bind(this);
        this.createUser = this.createUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    async getUsers(req, res, next) {
        try {
            const users = await this.service.find();
            res.json(users);
        } catch (error) {
            next(error)
        }
    }

    async getUser(req, res, next) {
        try {
            const { id } = req.params;
            const user = await this.service.findOne(id);
            res.json(user);
        } catch (error) {
            next(error)
        }
    
    }

    async createUser(req, res, next) {
        try {
            const body = req.body;
            const newUser = await this.service.create(body);
            res.status(201).json(newUser);
        } catch (error) {
            next(error)
        }
    }

    async updateUser(req, res, next) {
        try {
            const { id } = req.params;
            const body = req.body;
            const updatedUser = await this.service.update(id, body);
            res.json(updatedUser);
        } catch (error) {
            next(error)
        }
    }

    async deleteUser(req, res, next) {
        try {
            const { id } = req.params;
            const deletedUser = await this.service.delete(id);
            res.json(deletedUser);
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController