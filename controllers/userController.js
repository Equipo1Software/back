const user = require('../models/user.js')
const User = require('../models/user.js')
const { createToken } = require('../services/token')

const createUser = (req,res)=>{
    const {nombre,email,rol,casa} = req.body
    const newUser = new User({
        nombre,
        email,
        rol,
        casa
    })
    newUser.save((error,user)=>{
        if(error){
            return res.status(400).send({message: "No se ha podido crear el usuario"})
        }
        return res.status(201).send(user)
    })
}

const getUser = (req,res) =>{
    User.find((error,user)=>{
        if(error){
            return res.status(400).send({message: "Error al buscar usuarios"})
        }
        if(user.length===0){
            return res.status(404).send({message:"No se encontro usuarios"})
        }
        return res.status(201).send(user)
    })
}

const updateUser = (req,res) =>{
    const {id} = req.params
    User.findByIdAndUpdate(id,req.body,(error,user)=>{
        if(error){
            return res.status(400).send({message: "Error al buscar usuario"})
        }
        if(!user){
            return res.status(404).send({message:"No se encontró al usuario"})
        }
        return res.status(201).send({message:"usuario actualizado jiji"})
    })
}

const deleteUser = (req,res) =>{
    const {id} = req.params
    User.findByIdAndDelete(id,(error,user)=>{  
        if(error){
            return res.status(400).send({message: "Error al buscar usuario"})
        }
        if(!user){
            return res.status(404).send({message:"No se encontró al usuario"})
        }
        return res.status(201).send({message:"usuario eliminado"})
    })
}

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser,
    login,
    checkToken,
    logout
}