// importante a lib prompt-sync
let prompt = require('prompt-sync')()

//usar a lib do prompt-sync
let nome = prompt("Qual é o seu nome?")

// usando o nome capturado pelo prompt
console.log("Olá" + nome)

//importar o module calculadora
let {calcularNotaA1, calcularNotaA2, calcularNotaFinal} = require('./CalculadoraNota')

let exerciciosA1 =parseFloat( prompt("Qual a nota de execicios A1?"))
let trabalhoA1 = parseFloat( prompt("Qual a nota do trabalho A1?"))
let provaA1 = parseFloat( prompt("Qual a nota da prova A1?"))
let notaA1 = calcularNotaA1(exerciciosA1, trabalhoA1, provaA1)


console.log("### calculo da NOTA A1 ###")
console.log("Nota Exercicio A1: " , exerciciosA1)
console.log("Nota trabalho A1:" , trabalhoA1 )
console.log("Nota da prova A1", provaA1)
console.log("Nota A1 calculada", notaA1)

//NOTA A2
let exerciciosA2 = parseFloat( prompt("Qual a nota de execicios A2?"))
let trabalhoA2= parseFloat( prompt("Qual a nota do trabalho A2?"))
let provaA2 = parseFloat( prompt("Qual a nota da prova A2?"))
let notaA2 = calcularNotaA1(exerciciosA2, trabalhoA2, provaA2)

console.log("### calculo da NOTA A2 ###")
console.log("Nota Exercicio A2: " , exerciciosA2)
console.log("Nota trabalho A2:" , trabalhoA2 )
console.log("Nota da prova A2:", provaA2)
console.log("Nota A2 calculada:", notaA2)

let notaFinal = calcularNotaFinal(notaA1, notaA2)

console.log("### Calculo da NOTA FINAL ###")
console.log("Nota Final:", notaFinal)

if (notaFinal >=5){
    console.log("Parabens voce foi aprovado!!!")
}else{
    console.log(nome + "estude mais, infelizmente voce foi reprovado!!!")
}
