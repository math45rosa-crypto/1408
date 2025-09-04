// importar o express
const express = require('express')
//crio uma instancia(express) da minha aplicação
const app = express()
//guardar o numero da porta que vai ser alocada
const porta = 3000
//Middlewares (intermediario)
//metado e a rota
//req =dados da requisiçao
app.use((req, res, next)=>{
    console.log("Time : " , new Date().toLocaleString())
    console.log("Metodo:  ", req.method)
    console.log("Rota:  ", req.url)
    next()
})

app.get('/teste',(req, res, next) =>{
res.send("Teste atualizado")
})

app.get('/pessoas',(req, res, next) =>{
    const pessoas= [{
        id:1,
        nome: "pedro"
    }]
    res.json(pessoas)
    })



app.listen(porta, () =>{
    //
    console.log("aplicação rodando em http://localhost:3000")
})