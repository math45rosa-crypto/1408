const express = require('express')
const mongoose =require('mongoose')
const dotenv =require('dotenv').config()

const DB_HOST = process.env.DB_HOST
DB_USER = process.env.DB_USER
DB_PASS = process.env.DB_PASS
DB_NAME = process.env.DB_NOME

const url =`mongodb=srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`

const app = express()
app.use(express.json())




mongoose.connect('mongodb+srv://matheussilva19_db_user:Matheus3374@cluster0.idzfm0r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() =>{
    console.log("conectado ao MongoDB")
  })
  .catch(err => {
    console.log("Erro ao conectar no banco MongoDB", err)
  })

  app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
  })