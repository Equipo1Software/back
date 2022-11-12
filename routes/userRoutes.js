const express = require('express')
const userController = require('../controllers/userController')
const api = express.Router()

api.post('/user', userController.createUser)
api.get('/users', userController.getUser)
api.put('/user/update/:id', userController.updateUser)
api.delete('/user/delete/:id', userController.deleteUser)

module.exports= api;