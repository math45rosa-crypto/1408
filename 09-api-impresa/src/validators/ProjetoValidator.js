const yup = require('yup');

const criarProjetoSchema = yup.object().shape({
  nome: yup.string().required('Nome obrigatório'),
  descricao: yup.string().required('Descrição obrigatória'),
  data_inicio: yup.date().required('Data de início obrigatória'),
  data_fim: yup.date().required('Data de fim obrigatória')
    .test('data_fim_maior', 'Data fim deve ser posterior à data início', function(value) {
      return value > this.parent.data_inicio;
    })
});

const atualizarProjetoSchema = yup.object().shape({
  nome: yup.string(),
  descricao: yup.string(),
  data_inicio: yup.date(),
  data_fim: yup.date()
    .test('data_fim_maior', 'Data fim deve ser posterior à data início', function(value) {
      if(!value || !this.parent.data_inicio) return true;
      return value > this.parent.data_inicio;
    })
});

module.exports = { criarProjetoSchema, atualizarProjetoSchema };