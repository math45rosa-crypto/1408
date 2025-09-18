const express = require('express')
const router = express.Router()

// lista de pessoas pra simular o banco de dados

let listaPessoas = [
    {
        id: 1,
        nome:"Matheus",
        cpf: "12121212",
        email: "matheus@email.com",
        dataNascimento: "21/02/2003"
    },
    {
        id: 2,
        nome:"Maria",
        cpf: "5454545",
        email: "maria@email.com",
        dataNascimento: "28/02/2002"
    }
]
//mapear as rotas e a logica
//#Busca
//GET /pessoas
router.get('/pessoas', (req, res, next) =>{
    res.json(listaPessoas)
})

//busca por id

router.get('/pessoas/:id' , (req, res, next) => {
    //recebendo id com parametro dinamico
    const id = req.params.id
    //faço a busca na lista de pessoas pelo id recebido
    const pessoa = listaPessoas.find(pessoa => pessoa.id == id)
    if(!pessoa){
        return res.status(404).json({error: "pessoa não encontrada!!!"})

    }
    res.json(pessoa)
})

//#Criação
//POST /PESOOAS
//req.body
//new Date()

//#Atualização
//PUT ou PATH /pessoas/;id
//req.body

//#Remoção
//DELETE /pessoas/:id





module.exports = router