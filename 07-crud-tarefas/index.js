const express = require('express')
const mongoose =require('mongoose')
const dotenv =require('dotenv').config()

const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_NAME

const url =`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`

const app = express()
app.use(express.json())




mongoose.connect(url)
  .then(() =>{
    console.log("conectado ao MongoDB")
  })
  .catch(err => {
    console.log("Erro ao conectar no banco MongoDB", err)
  })


  const TarefaModel = mongoose.model('Tarefas', new mongoose.Schema(
    {
      nome: String
    }
  ))
app.post('/tarefas', async (req, res, next)=>{
  const tarefa = req.body
  if(!tarefa.nome) {
    return res.status(400).json({ erro: "o campo nome é obrigatorio!!!"})
  }
  const tarefaCriada = await TarefaModel.create(tarefa)
  res.status(201).json(tarefaCriada)
})
//READ
app.get('/tarefas', async (req, res, next)=>{
  const tarefas = await TarefaModel.find()
  res.json(tarefas)
})
//UPDATE
app.patch('/tarefas/:id', async (req, res, next)=> {
  const id = req.params.id
  const tarefa = req.body 
  if(!tarefa.nome) {
    return res.status(400).json({ erro: "o campo nome é obrigatorio!!!"})
}
const tarefaAtualizada = await TarefaModel.findByIdAndUpdate(id, tarefa, { new: true })
if(!tarefaAtualizada){
  return res.status(404).json({ erro: "Tarefa não encontrada!!!"})
}
res.json(tarefaAtualizada)
})
//DELETE
app.delete('/tarefas/:id' , async (req, res , next) => {
  const id = req.params.id
  await TarefaModel.findByIdAndDelete(id)
  res.json({ mensagem: "Tarefa excluida!!!"})
})

//start
  app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
  })

 