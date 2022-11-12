const { deleteCasa } = require('./casaController')

GastoComun = require('../models/gastocomun')

const createGasto = (req,res)=>{
    const {agua,luz,gas,mantenimiento,sueldo,fecha,estado} = req.body
    newGasto = new GastoComun({
        agua,
        luz,
        gas,
        mantenimiento,
        sueldo,
        fecha,
        estado,
    })
    newGasto.save((error,gasto)=>{
        if(error){
            return res.status(400).send({message:"No se pudo crear el gasto"})
        }
        return res.status(201).send(gasto)
    })
}

const getGastos = (req,res)=>{
    GastoComun.find({},(error,gasto)=>{
        if(error){
            return res.status(400).send({message:"Error al buscar los gastos"})
        }
        if(gasto.length===0){
            return res.status(404).send({message:"No se encontraron gastos"})
        }
        return res.status(201).send(gasto)
    })   
}

const updateGasto = (req,res)=>{
    const {id} = req.params
    GastoComun.findByIdAndUpdate(id,req.body,(error,gasto)=>{
        if(error){
            return res.status(400).send({message: "Error al buscar gasto"})
        }
        if(!gasto){
            return res.status(404).send({message:"No se encontró el gasto"})
        }
        return res.status(201).send({message:"gasto actualizado"})
    })
}

const deleteGasto = (req,res)=>{
    const {id} = req.params
    GastoComun.findByIdAndDelete(id,(error,gasto)=>{
    
        if(error){
            return res.status(400).send({message: "Error al buscar gasto"})
        }
        if(!gasto){
            return res.status(404).send({message:"No se encontró el gasto"})
        }
        return res.status(201).send({message:"gasto eliminado"})
    })
}

module.exports = {
    createGasto,
    getGastos,
    updateGasto,
    deleteGasto
}