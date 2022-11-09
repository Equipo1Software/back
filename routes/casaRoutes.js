const express = require('express')
const casaController = require('../controllers/casaController')
const api = express.Router();
console.log("modelo3")
api.post("/casa", casaController.createCasa)

module.exports=api;