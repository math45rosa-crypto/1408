const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    nome: {type: String, required: true},
    descrcao: {type: String, required: true},
    salario: { type: Number, required: true}
})


const CargoModel = mongoose.model('Cargos', schema)

module.exports = Cargomopdel