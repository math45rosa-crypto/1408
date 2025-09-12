const express = require('express')

const app = express()

const calculadoraRouter = require('./router/calculadora');
app.use('/calculadora', calculadoraRouter);

app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
})


