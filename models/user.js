const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
    nombre:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    rol:{
        type:String,
        enum:["vecino","admin"]
    },
    casa:{
        type: Schema.ObjectId,
        ref: "casa"
    }
})

module.exports = mongoose.model('user',userSchema)