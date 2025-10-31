const yup = require('yup')

const schema = yup.object().shape({
    nome: yup.string().required("O campo nome é obrigatorio"),
    descricao: yup.string().required("O campo descrição é obrigatorio")
}
)
async function validarDepartamento(req, res, next) {
    try {
        await schema.validate(req.body, {abortEarly: false })
        next()
    }catch(error) {
        return res.status(400).json({erro : error.erros})
    }
}

module.exports = {
    validarDepartamento
}