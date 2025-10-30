const express = require('express')
const router = express.Router()
const PessoaModel = require('../models/LivroModel')

// validadores como Middlewares
const { validarNovoLivro } = require('../validators/LivroValidator')
const { validarID } = require('../validators/IDValidator')

// Rotas do CRUD
// Create
router.post('/livros', validarNovoLivro, async (req, res, next) => {
  const livro = req.body
  const livroCadastrad = await LivroModel.create(livro)
  res.status(201).json(livroCadastrado)
})

// Read
router.get('/livros', async (req, res, next) => {
  const livros = await LivroModel.find()
  res.json(livros)
})

router.get('/livros/:id', validarID, async (req, res, next) => {
  const id = req.params.id
  const livroEncontrado = await PessoaModel.findById(id)
  if (!livroEncontrado) {
    return res.status(404).json({ erro: "Livro não encontrado!!!" })
  }
  res.json(livroEncontrado)
})

// Update
router.put('/livros/:id', validarID, async (req, res, next) => {
  const id = req.params.id
  const novoDados = req.body
  const livroAtualizado = await LivroModel.findByIdAndUpdate(id, novoDados, { new: true })
  if (!livroAtualizado) {
    return res.status(404).json({ erro: "Livro não econtrado" })
  }
  res.json(livroAtualizado)
})

// Delete
router.delete('/livros/:id', validarID, async (req, res, next) => {
  const id = req.params.id
  await LivroModel.findByIdAndDelete(id)
  res.status(204).send()
})



module.exports = router