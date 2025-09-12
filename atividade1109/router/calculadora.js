
const express = require('express')

const router = express.Router()


router.get('/somar', (req, res) => {
    
    const numA = Number(req.query.numA);
    const numB = Number(req.query.numB);

    const resultado = numA + numB

    res.send(resultado)
    
    });
router.get('/subtrair', (req, res) => {
        
        const numA = Number(req.query.numA);
        const numB = Number(req.query.numB);
        const resultado = numA - numB

    res.send(resultado)
        
        });
router.get('/multiplicar', (req, res) => {
        
        const numA = Number(req.query.numA);
        const numB = Number(req.query.numB);
        const resultado = numA * numB

    res.send(resultado)
        
        });
            
router.get('/dividir', (req, res) => {
        
        const numA = Number(req.query.numA);
        const numB = Number(req.query.numB);
        const resultado = numA / numB

    res.send(resultado)
        
        });
router.get('/aoQuadrado', (req, res) => {
        
        const numA = Number(req.query.numA);
        const resultado = numA * numA

    res.send(resultado)
        
        });
router.get('/raizQuadrada', (req, res) => {
        
        const numA = Number(req.query.numA);
        if (numA < 0){
            return "Erro , número negativo"
        }
        const resultado = Math.sqrt(numA);

        res.send(resultado)
       
        });




        module.exports = router