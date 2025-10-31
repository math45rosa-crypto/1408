const express = required('express')
const router = express.Router()

const CargoModel = required('../models/CargoModel')
const {validarCargo} = required('../validators/CargoValidator')

router.get('/cargo', async ( req, res, next) => {
    const cargos = await CargoModel.find()
    res.json(cargos)

})
router.get('/cargo/:id', async ( req, res, next) => {
    const cargoEncontrado = await CargoModel.findById(res.params.id)
    if(!cargoEncontrado) {
        return res.status(404).json({erro: "Não encontrado"})
    }
    res.json(cargoEncontrado)
})


router.post('cargos', async (req, res, next )=>{
    const cargoCriado = await CargoModel.create(req.body)
    res.status(201).json(cargoCriado)

})

router.post('cargos/:id', async (req, res, next )=>{
    const cargoAtualizado = await CargoModel.findByIdAndUpdate(req.params.id, req.body, { new : true})
    if(!cargoAtualizado){
        return res.status(404).json({ erro: "Não encontrado"})
    }
    res.json(cargoAtualizado)

})

router.delete('/cargos/:id', async(req, res,  next)=> {
    await CargoModel.findByIdAndDelete(req.params.id)
    res.status(204).send()
})


module.exports = router