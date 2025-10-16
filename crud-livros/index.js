const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_NAME

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`

const app = express()
app.use(express.json())

mongoose.connect(url)
  .then(() => {
    console.log("Conectado ao MongoDB")
  })
  .catch(err => {
    console.error(" Erro ao conectar no MongoDB:", err)
  })

// Model com todos os campos solicitados
const LivrosModel = mongoose.model('Livros', new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  editora: { type: String, required: true },
  ano: { type: Number, required: true },
  preco: { type: Number, required: true }
}))

// Criar livro
app.post('/livros', async (req, res) => {
  try {
    const { titulo, autor, editora, ano, preco } = req.body

    if (!titulo || !autor || !editora || !ano || !preco) {
      return res.status(400).json({ erro: "Todos os campos são obrigatórios: titulo, autor, editora, ano, preco." })
    }

    const novoLivro = await LivrosModel.create({ titulo, autor, editora, ano, preco })
    res.status(201).json(novoLivro)
  } catch (err) {
    res.status(500).json({ erro: "Erro ao criar livro", detalhes: err.message })
  }
})

// Listar todos os livros
app.get('/livros', async (req, res) => {
  try {
    const livros = await LivrosModel.find()
    res.json(livros)
  } catch (err) {
    res.status(500).json({ erro: "Erro ao buscar livros", detalhes: err.message })
  }
})

// Buscar livro por ID
app.get('/livros/:id', async (req, res) => {
  try {
    const livro = await LivrosModel.findById(req.params.id)
    if (!livro) {
      return res.status(404).json({ erro: "Livro não encontrado" })
    }
    res.json(livro)
  } catch (err) {
    res.status(500).json({ erro: "Erro ao buscar livro", detalhes: err.message })
  }
})

// Atualizar livro
app.patch('/livros/:id', async (req, res) => {
  try {
    const livroAtualizado = await LivrosModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )
    if (!livroAtualizado) {
      return res.status(404).json({ erro: "Livro não encontrado" })
    }
    res.json(livroAtualizado)
  } catch (err) {
    res.status(500).json({ erro: "Erro ao atualizar livro", detalhes: err.message })
  }
})

// Deletar livro
app.delete('/livros/:id', async (req, res) => {
  try {
    const livroExcluido = await LivrosModel.findByIdAndDelete(req.params.id)
    if (!livroExcluido) {
      return res.status(404).json({ erro: "Livro não encontrado" })
    }
    res.json({ mensagem: "Livro excluído com sucesso!" })
  } catch (err) {
    res.status(500).json({ erro: "Erro ao excluir livro", detalhes: err.message })
  }
})

app.listen(3000, () => {
  console.log(" Aplicação rodando em http://localhost:3000")
})
