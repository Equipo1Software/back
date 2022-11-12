const express = require('express')
const gastoController = require('../controllers/gastocomunController')
const api = express.Router();

api.post('/gasto/:id',gastoController.createGasto);
api.get('/gastos',gastoController.getGastos);
api.get('/gastos/:id', gastoController.getGastosByIdVecino)
api.put('/gasto/update/:id/:id_user', gastoController.updateGasto)
api.delete('/gasto/delete/:id/:id_user', gastoController.deleteGasto)

module.exports = api