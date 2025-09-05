//importar o express

const express = require('express')
//crio uma instancia
const app = express()

//Middlewares (intermediarios)
//Intermediario de log

app.use((req, res, next) => {
    console.log("----------####---------")
    console.log("tempo: ", new Date().toLocaleString())
    console.log("Metodo: ", req.method)
    console.log("Rota: ", req.url)
    next()
})

app.get('/nome', (req, res, next)=> {
    //capturar informação do usuario
    //vão vir atraves dos parametros da requição (query params)
   const PrimeiroNome = req.query.PrimeiroNome
   const SobreNome = req.query.SobreNome
    res.send("ola " + PrimeiroNome + " " + SobreNome + "!!!")
})
//importando o router calculadora de nota
const calculadoraNotarouter = require('./routes/calculadoraNota')
//Toda requisição que chegar na rota /calculadora vai para o router
app.use('/calculadora', calculadoraNotarouter)

//executar a aplicação
app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
})