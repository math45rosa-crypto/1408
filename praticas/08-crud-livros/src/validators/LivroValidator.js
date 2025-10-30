const yup = require('yup')

// Esquema de validação
const schemaNovoLivro = yup.object().shape(
  {
    titulo: yup.string().required("O campo titulo é obrigatório"),
    autor: yup.string().required("O campo autor é obrigatório"),
    editor: yup.string().email("editor inválido").required("O campo editor é obrigatório"),
    ano: yup.date().required("O campo ano é obrigatório"),
    preço: yup.string().required("O campo preço é obrigatório"),
  }
)

// Middlewares de validação
async function validarNovoLivro(req, res, next) {
  try {
    await schemaNovoLivro.validate(req.body, { abortEarly: false })
    next()
  } catch (error) {
    return res.status(400).json({ erros: error.errors })
  }
}

// exportar os middlewares
module.exports = {
  validarNovoLivro
}