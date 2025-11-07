const yup = require('yup');
const { isValidObjectId } = require('./IDValidator');

const criarTarefaSchema = yup.object().shape({
  titulo: yup.string().required('Título obrigatório'),
  descricao: yup.string().required('Descrição obrigatória'),
  data_inicio: yup.date().required('Data início obrigatória'),
  data_fim: yup.date().required('Data fim obrigatória')
    .test('data_fim_maior', 'Data fim deve ser posterior à data início', function(value) {
      return value > this.parent.data_inicio;
    }),
  responsavel: yup.string().required('Responsável obrigatório').test('is-valid-id', 'ID de funcionário inválido', value => isValidObjectId(value)),
  projeto: yup.string().required('Projeto obrigatório').test('is-valid-id', 'ID de projeto inválido', value => isValidObjectId(value))
});

const atualizarTarefaSchema = yup.object().shape({
  titulo: yup.string(),
  descricao: yup.string(),
  data_inicio: yup.date(),
  data_fim: yup.date()
    .test('data_fim_maior', 'Data fim deve ser posterior à data início', function(value) {
      if(!value || !this.parent.data_inicio) return true;
      return value > this.parent.data_inicio;
    }),
  responsavel: yup.string().test('is-valid-id', 'ID de funcionário inválido', value => !value || isValidObjectId(value)),
  projeto: yup.string().test('is-valid-id', 'ID de projeto inválido', value => !value || isValidObjectId(value))
});

module.exports = { criarTarefaSchema, atualizarTarefaSchema };