function soma(a, b) {
    return a + b
}
function subtrair(a, b) {
    return a - b
}
function multiplicar(a, b) {
    return a * b
}
function dividir(a, b) {
    return a / b
}

function aoQuadrado(a ){
    return a * a
    }
function raizQuadrada(a){
    if (a < 0){
    return "Erro , número negativo"
}
return Math.sqrt(a);

    }


    module.exports = {
        soma,
        subtrair,
        multiplicar,
        dividir,
        aoQuadrado,
        raizQuadrada
    }

