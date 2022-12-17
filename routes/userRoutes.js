const express = require('express')
const userController = require('../controllers/userController')
const api = express.Router()
const auth = require('../middlewares/auth')

api.post('/user', userController.createUser)
api.get('/users', userController.getUser)
api.put('/user/update/:id', userController.updateUser)
api.delete('/user/delete/:id', userController.deleteUser)
api.post('/login', userController.login)
api.get('/checkToken', auth.auth,userController.checkToken)
api.get('/logout', auth.auth, userController.logout)

module.exports= api;