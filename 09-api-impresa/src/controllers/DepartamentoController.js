const express = required('express')
const router = express.Router()

const DepartamentoModel = required('../models/DepartamentoModel')
const {validarDepartamento} = required('../validators/DepartamentoValidator')

router.get('/departamento', async ( req, res, next) => {
    const departamentos = await DepartamentoModel.find()
    res.json(departamentos)

})
router.get('/departamento/:id', async ( req, res, next) => {
    const departamentoEncontrado = await DepartamentoModel.findById(res.params.id)
    if(!departamentoEncontrado) {
        return res.status(404).json({erro: "Não encontrado"})
    }
    res.json(departamentoEncontrado)
})


router.post('departamentos', async (req, res, next )=>{
    const departamentoCriado = await DepartamentoModel.create(req.body)
    res.status(201).json(departamentoCriado)

})

router.post('departamentos/:id', async (req, res, next )=>{
    const departamentoAtualizado = await DepartamentoModel.findByIdAndUpdate(req.params.id, req.body, { new : true})
    if(!departamentoAtualizado){
        return res.status(404).json({ erro: "Não encontrado"})
    }
    res.json(departamentoAtualizado)

})

router.delete('/departamentos/:id', async(req, res, next)=> {
    await DepartamentoModel.findByIdAndDelete(req.params.id)
    res.status(204).send()

})

module.exports = router