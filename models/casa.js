const mongoose = require('mongoose')
const Schema = mongoose.Schema

const casaSchema = new Schema({
  numero: {
    type: Number,
    required:true
  },
  estado:{
    type:String,
    enum:["disponible","ocupada"]
  }
})

module.exports = mongoose.model('casa',casaSchema)