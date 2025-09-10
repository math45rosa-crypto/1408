//importar o express
const express = require('express')
//criar um roteador
const router = express.Router()

//Mapeamento das rotas e implemento a lógica
//calcula a nota do A1
router.get('/notaA1', (req, res, next) =>{
    const exercicio = parseFloat(req.query.exercicio)
    const trabalho = parseFloat(req.query.trabalho)
    const prova = parseFloat(req.query.prova)

    //validar se os parametros existem
    if(isNaN(exercicio) || isNaN(trabalho) || isNaN(prova)){
        return res.status(400).json({erro: " Notas invalidas!!"})
    }
    //validar se as notas estão no intervalo correto
    if(exercicio < 0 || exercicio > 1 || trabalho < 0 || trabalho >3 || prova < 0 || prova >6){
        return res.status(400).json({erro: " Notas  fora do intervalo"})
    }

    const notaA1 = exercicio + trabalho + prova

    res.json({ notaA1 })

    
})

//calcula a nota do A2
router.get('/notaA2', (req, res, next) =>{
    const exercicio = parseFloat(req.query.exercicio)
    const trabalho = parseFloat(req.query.trabalho)
    const prova = parseFloat(req.query.prova)

    //validar se os parametros existem
    if(isNaN(exercicio) || isNaN(trabalho) || isNaN(prova)){
        return res.status(400).json({erro: " Notas invalidas!!"})
    }
    //validar se as notas estão no intervalo correto
    if(exercicio < 0 || exercicio > 1 || trabalho < 0 || trabalho >3 || prova < 0 || prova >6){
        return res.status(400).json({erro: " Notas  fora do intervalo"})
    }

    const notaA2 = exercicio + trabalho + prova

    res.json({ notaA2 })

    
})



//calcular a media final

router.get('/media', (req, res, next) =>{
const notaA1 = parseFloat(req.query.notaA1)
const notaA2 = parseFloat(req.query.notaA2)

if (isNaN(notaA1) || isNaN(notaA2)) {
    return res.status(400).json({erro: " Notas invalidas"})

}
const media = (notaA1 * 0.4) + (notaA1 * 0.6)

res.json({ media})
}
)

module.exports = router








module.exports = router