const express = require('express');
const router = express.Router();
const ProjetoModel = require('../models/ProjetoModel');
const { createProjetoSchema, updateProjetoSchema } = require('../validators/ProjetoValidator');


router.get('/', async (req, res) => {
  try {
    const projetos = await ProjetoModel.find();
    res.json(projetos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const projeto = await ProjetoModel.findById(req.params.id);
    if (!projeto) return res.status(404).json({ error: 'Projeto não encontrado' });
    res.json(projeto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.post('/', async (req, res) => {
  try {
    await createProjetoSchema.validate(req.body, { abortEarly: false });
    const projeto = await ProjetoModel.create(req.body);
    res.status(201).json(projeto);
  } catch (err) {
    res.status(400).json({ errors: err.errors });
  }
});


router.put('/:id', async (req, res) => {
  try {
    await updateProjetoSchema.validate(req.body, { abortEarly: false });
    const projeto = await ProjetoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!projeto) return res.status(404).json({ error: 'Projeto não encontrado' });
    res.json(projeto);
  } catch (err) {
    res.status(400).json({ errors: err.errors });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const projeto = await ProjetoModel.findByIdAndDelete(req.params.id);
    if (!projeto) return res.status(404).json({ error: 'Projeto não encontrado' });
    res.json({ message: 'Projeto removido com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;