const yup = require('yup');
const { isValidObjectId } = require('./IDValidator');

const criarFuncionarioSchema = yup.object().shape({
  nome: yup.string().required('Nome obrigatório'),
  cpf: yup.string().required('CPF obrigatório'),
  email: yup.string().email('Email inválido').required('Email obrigatório'),
  telefone: yup.string().required('Telefone obrigatório'),
  data_contratacao: yup.date().required('Data de contratação obrigatória'),
  data_nascimento: yup.date().required('Data de nascimento obrigatória'),
  genero: yup.string().required('Gênero obrigatório'),
  endereco: yup.object({
    cep: yup.string(),
    logradouro: yup.string(),
    numero: yup.string(),
    complemento: yup.string(),
    bairro: yup.string(),
    cidade: yup.string(),
    uf: yup.string()
  }),
  cargo: yup.string().required('Cargo obrigatório').test('is-valid-id', 'ID de cargo inválido', value => isValidObjectId(value)),
  departamento: yup.string().required('Departamento obrigatório').test('is-valid-id', 'ID de departamento inválido', value => isValidObjectId(value))
});

const atualizarFuncionarioSchema = yup.object().shape({
  nome: yup.string(),
  cpf: yup.string(),
  email: yup.string().email('Email inválido'),
  telefone: yup.string(),
  data_contratacao: yup.date(),
  data_nascimento: yup.date(),
  genero: yup.string(),
  endereco: yup.object({
    cep: yup.string(),
    logradouro: yup.string(),
    numero: yup.string(),
    complemento: yup.string(),
    bairro: yup.string(),
    cidade: yup.string(),
    uf: yup.string()
  }),
  cargo: yup.string().test('is-valid-id', 'ID de cargo inválido', value => !value || isValidObjectId(value)),
  departamento: yup.string().test('is-valid-id', 'ID de departamento inválido', value => !value || isValidObjectId(value))
});

module.exports = { criarFuncionarioSchema, atualizarFuncionarioSchema };