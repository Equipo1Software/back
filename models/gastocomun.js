const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gastoComun= new Schema({
    agua:{
        type:Number,
        required:true
    },
    luz:{
        type:Number,
        required:true
    },
    gas:{
        type:Number,
        required: true
    },
    mantenimiento:{
        type:Number,
        required:true
    },
    sueldo:{
        type:Number,
        required:true
    },
    fechaEmision:{
        type:Date,
        required:true
    },
    fechaLimite:{
        type:Date,
        required:true
    },
    estado:{
        type:String,
        enum:["vencido","por pagar","pagado"]
    },
    vecino:{
        type:Schema.ObjectId,
        ref:'user'
    }
})

module.exports = mongoose.model("gastocomun",gastoComun)