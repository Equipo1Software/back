const gastocomun = require('../models/gastocomun')

GastoComun = require('../models/gastocomun')
User = require ('../models/user')

const createGasto = (req,res)=>{
    const {id}=req.params
    const {agua,luz,gas,mantenimiento,sueldo,fecha,estado,vecino} = req.body
    newGasto = new GastoComun({
        agua,
        luz,
        gas,
        mantenimiento,
        sueldo,
        fecha,
        estado,
        vecino
    })
    User.findById({_id:id},(error,user)=>{
        if(error){
            return res.status(400).send({message: "Error al buscar usuario"})
        }
        if(!user){
            return res.status(404).send({message:"No se encontró al usuario"})
        }
        if(user.rol==='vecino'){
            return res.status(401).send({message: "Sólo el admin tiene permiso de crear un gasto comun"})
        }
        else{
            newGasto.save((error,gasto)=>{
                if(error){
                    return res.status(400).send({message:"No se pudo crear el gasto"})
                }
                return res.status(201).send(gasto)
            })
        }
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

const getGastosByIdVecino = (req,res)=>{
    const {id} = req.params
    // verificar vecino
    User.findById({_id:id},(error,user)=>{     
        if(error){
            return res.status(400).send({message: "Error al buscar usuario"})
        }
        if(!user){
            return res.status(404).send({message:"No se encontró al usuario"})
        }
        if(user.rol==='admin'){
            return res.status(401).send({message: "no se permiten admin"})
        }
        if(user.rol==='vecino'){
            //visualizar gasto del vecino
            GastoComun.find({vecino:id},(error,gasto)=>{
                if(error){
                    return res.status(400).send({message:"Error al buscar los gastos del vecino"})
                }
                if(gasto.length===0){
                    return res.status(404).send({message:"El vecino no tiene gastos"})
                }
                return res.status(201).send(gasto)
            })   
        }    
    })

}


const updateGasto = (req,res)=>{
    const {id,id_user} = req.params
    //const{id_user} = req.params
    //verificar admin
    User.findById({_id:id_user},(error,user)=>{ 
        if(error){
            return res.status(400).send({message: "Error al buscar usuario"})
        }
        if(!user){
            return res.status(404).send({message:"No se encontró al usuario"})
        }
        if(user.rol!='admin'){
            return res.status(401).send({message: "no se permiten vecinos"})
        }
        else{
            //luego de verificar el admin se procede al update
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
    })
}

const deleteGasto = (req,res)=>{
    const {id, id_user} = req.params
    User.findById({_id:id_user},(error,user)=>{
        if(error){
            return res.status(400).send({message: "Error al buscar usuario"})
        }
        if(!user){
            return res.status(404).send({message:"No se encontró al usuario"})
        }
        if(user.rol!='admin'){
            return res.status(401).send({message: "sólamente el admin tiene permiso para esta accion"})
        }
        else{
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
    })
}

module.exports = {
    createGasto,
    getGastos,
    getGastosByIdVecino,
    updateGasto,
    deleteGasto
}