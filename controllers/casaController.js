const Casa = require('../models/casa')
console.log("modelo2")
const createCasa = (req,res)=>{
    const {numero,estado}=req.body
    const newCasa= new Casa({
        numero,
        estado
    })
    console.log("fdsafdsa")
    newCasa.save((error,casa)=>{
        if(error){
            return res.status(400).send({message:"No se pudo crear el Status"})
        }
        return res.status(201).send(casa)
    })
}

module.exports={
    createCasa
}