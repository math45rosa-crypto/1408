const express = require('express');
const router = express.Router();
const TarefaModel = require('../models/TarefaModel');
const { createTarefaSchema, updateTarefaSchema } = require('../validators/TarefaValidator');


router.get('/', async (req, res) => {
  try {
    const tarefas = await TarefaModel.find()
      .populate('responsavel')
      .populate('projeto');
    res.json(tarefas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const tarefa = await TarefaModel.findById(req.params.id)
      .populate('responsavel')
      .populate('projeto');
    if (!tarefa) return res.status(404).json({ error: 'Tarefa não encontrada' });
    res.json(tarefa);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.post('/', async (req, res) => {
  try {
    await createTarefaSchema.validate(req.body, { abortEarly: false });
    const tarefa = await TarefaModel.create(req.body);
    res.status(201).json(tarefa);
  } catch (err) {
    res.status(400).json({ errors: err.errors });
  }
});


router.put('/:id', async (req, res) => {
  try {
    await updateTarefaSchema.validate(req.body, { abortEarly: false });
    const tarefa = await TarefaModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!tarefa) return res.status(404).json({ error: 'Tarefa não encontrada' });
    res.json(tarefa);
  } catch (err) {
    res.status(400).json({ errors: err.errors });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const tarefa = await TarefaModel.findByIdAndDelete(req.params.id);
    if (!tarefa) return res.status(404).json({ error: 'Tarefa não encontrada' });
    res.json({ message: 'Tarefa removida com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;