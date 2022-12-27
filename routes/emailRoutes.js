const express = require('express')
const api = express.Router()
const mailerController = require('../controllers/emailController')

api.post('/mail',mailerController.sendmail)

module.exports = api