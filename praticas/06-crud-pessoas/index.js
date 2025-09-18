const express = require('express')
const app = express()
// configurar e mapear os intermediarios


const cors = require('cors')
app.use(cors()) //habilitar o cors do browser
app.use(express.json()) // receber json no body da requisição


//mapear os meus routes
const pessoasRouter = require('./routes/pessoas')
app.use(pessoasRouter)





//executar aaplicação
app.listen(3000, () =>{
    console.log("Aplicação rodando em http://localhost:3000")
})