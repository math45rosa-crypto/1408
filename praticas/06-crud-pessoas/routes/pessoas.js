const express = require('express')
const router = express.Router()

// lista de pessoas pra simular o banco de dados

let listaPessoas = [
    {
        id: 1,
        nome: "Matheus",
        cpf: "12121212",
        email: "matheus@email.com",
        dataNascimento: "21/02/2003"
    },
    {
        id: 2,
        nome: "Maria",
        cpf: "5454545",
        email: "maria@email.com",
        dataNascimento: "28/02/2002"
    }
]
//mapear as rotas e a logica
//#Busca
//GET /pessoas
router.get('/pessoas', (req, res, next) => {
    res.json(listaPessoas)
})

//busca por id

router.get('/pessoas/:id', (req, res, next) => {
    //recebendo id com parametro dinamico
    const id = req.params.id
    //faço a busca na lista de pessoas pelo id recebido
    const pessoa = listaPessoas.find(pessoa => pessoa.id == id)
    if (!pessoa) {
        return res.status(404).json({ error: "pessoa não encontrada!!!" })

    }
    res.json(pessoa)
})

//#Criação
//POST /PESOOAS

router.post('/pessoas', (req, res, next) => {
    const { nome, cpf, email, dataNascimento } = req.body
    if (!nome || !cpf || !email || !dataNascimento) {
        return res.status(400).json({ error: "Nome, cpf, email, e dataNascimento são obrigatorios!!!" })
    }
    // validar se o cpf já foi cadastrado
    if (listaPessoas.some(pessoa => pessoa.cpf == cpf)) {
        return res.status(409).json({ error: "CPF ja cadastrado!!!" })
    }

    const novaPessoa = {
        id: Date.now(),
        nome,
        cpf,
        email,
        dataNascimento
    }

    listaPessoas.push(novaPessoa)
    res.status(201).json({ message: "Pessoa cadastrada com sucesso!!!", novaPessoa })
})
//req.body
//new Date()

//#Atualização
//PUT ou PATH /pessoas/;id
//req.body
router.put("/pessoas/:id", (req, res, next) => {
    const id = req.params.id
    console.log(id)
    let pessoa = listaPessoas.find(pessoa => pessoa.id == id)
    console.log(pessoa)
    if (!pessoa) {
        return res.status(404).json({ error: "Pessoa não encontrada!!!" })
    }

    let { nome, email, dataNascimento } = req.body
    if (!nome || !email || !dataNascimento) {
        return res.status(400).json({ error: "nome, email, dataNascimento são obrigatorios" })
    }

    //atualizo os dados da pessoa
    pessoa.nome = nome
    pessoa.email = email
    pessoa.dataNascimento = dataNascimento

    res.json({ message: "Pessoa atualizada com sucesso!!! ", pessoa })


})
//#Remoção
//DELETE /pessoas/:id
router.delete('/pessoas/:id' , (req, res , next)=> {
    const id = req.params.id

//validar se a pessoa nao existe

const pessoa = listaPessoas.find(pessoa => pessoa.id == id)
if (!pessoa){
    return res.status(404).json({ error: "pessoa não encontrada!!"})
}

listaPessoas = listaPessoas.filter(pessoa => pessoa.id != id)
res.json({message: "pessoa excluida com sucesso!!!"})
})

//exportar o roteador

module.exports = router