const express = require('express');
const router = express.Router();
const FuncionarioModel = require('../models/FuncionarioModel');
const { createFuncionarioSchema, updateFuncionarioSchema } = require('../validators/FuncionarioValidator');

router.get('/', async (req, res) => {
  try {
    const funcionarios = await FuncionarioModel.find()
      .populate('cargo')
      .populate('departamento');
    res.json(funcionarios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const funcionario = await FuncionarioModel.findById(req.params.id)
      .populate('cargo')
      .populate('departamento');
    if (!funcionario) return res.status(404).json({ error: 'Funcionário não encontrado' });
    res.json(funcionario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.post('/', async (req, res) => {
  try {
    await createFuncionarioSchema.validate(req.body, { abortEarly: false });
    const funcionario = await FuncionarioModel.create(req.body);
    res.status(201).json(funcionario);
  } catch (err) {
    res.status(400).json({ errors: err.errors });
  }
});


router.put('/:id', async (req, res) => {
  try {
    await updateFuncionarioSchema.validate(req.body, { abortEarly: false });
    const funcionario = await FuncionarioModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!funcionario) return res.status(404).json({ error: 'Funcionário não encontrado' });
    res.json(funcionario);
  } catch (err) {
    res.status(400).json({ errors: err.errors });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const funcionario = await FuncionarioModel.findByIdAndDelete(req.params.id);
    if (!funcionario) return res.status(404).json({ error: 'Funcionário não encontrado' });
    res.json({ message: 'Funcionário removido com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;