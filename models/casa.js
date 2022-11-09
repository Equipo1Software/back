const mongoose = require('mongoose')
const Schema = mongoose.Schema
console.log("modelo")
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
console.log("fdsa")
module.exports = mongoose.model('casa',casaSchema)