const express = require('express')
const gastoController = require('../controllers/gastocomunController')
const api = express.Router();

api.post('/gasto',gastoController.createGasto);
api.get('/gastos',gastoController.getGastos);
api.put('/gasto/update/:id', gastoController.updateGasto)
api.delete('/gasto/delete/:id', gastoController.deleteGasto)

module.exports = api