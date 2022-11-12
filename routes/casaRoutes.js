const express = require('express')
const casaController = require('../controllers/casaController')
const api = express.Router();

api.post("/casa", casaController.createCasa)
api.get('/casas',casaController.getCasas)
api.put('/casa/update/:id', casaController.updateCasa)

module.exports=api;