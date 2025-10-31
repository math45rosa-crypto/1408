const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    nome: { type: String, required: true },
    describe: {type: String, required: true } 
}
)

const DepartamentoMondel = mongoose.model('Departamentos', schema)

module.exports = DepartamentoMondel