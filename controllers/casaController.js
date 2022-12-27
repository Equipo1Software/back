const Casa = require('../models/casa')

const createCasa = (req,res)=>{
    const {numero,estado}=req.body
    const newCasa= new Casa({
        numero,
        estado
    })
    
    newCasa.save((error,casa)=>{
        if(error){
            return res.status(400).send({message:"No se pudo crear la casa"})
        }
        return res.status(201).send(casa)
    })
}

const getCasas = (req,res) =>{
    Casa.find({},(error,casa)=>{
        if(error){
            return res.status(400).send({message:"Error al buscar casa"})
        }
        if(casa.length===0){
            return res.status(404).send({message:"No se encontraron casas"})
        }
        return res.status(201).send(casa)
    })
}

const updateCasa = (req,res) =>{
    const {id} = req.params
    Casa.findByIdAndUpdate(id,req.body,(error,casa)=>{
    
        if(error){
            return res.status(400).send({message: "Error al actualizar casa"})
        }
        if(!casa){
            return res.status(404).send({message:"No se encontró la casa"})
        }
        return res.status(201).send({message:"casa actualizada"})
    })
}

const deleteCasa = (req,res) =>{
    const {id} = req.params
    User.findByIdAndDelete(id,(error,casa)=>{  
        if(error){
            return res.status(400).send({message: "Error al eliminar casa"})
        }
        if(!user){
            return res.status(404).send({message:"No se encontró la casa"})
        }
        return res.status(201).send({message:"casa eliminada"})
    })
}

module.exports={
    createCasa,
    getCasas,
    updateCasa,
    deleteCasa
}