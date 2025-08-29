const calc = require('./calculadora');
describe('Testando a calculadora', () => {

    //soma
    test('5 + 2 = 7', () => {
        expect(calc.soma(5, 2)).toBe(7);
    });
    test('1 + 0 = 1', () => {
        expect(calc.soma(1, 0)).toBe(1);
    });
    test('0 + 0 = 0 ', () => {
        expect(calc.soma(0, 0)).toBe(0);
    });
    test('-2 + -2 = -4', () => {
        expect(calc.soma(-2, -2)).toBe(-4);
    });


    //subtrair

    test(' 2 - 2 = 0', () => {
        expect(calc.subtrair(2, 2)).toBe(0);
    });
    test('4 - 0  = 4', () => {
        expect(calc.subtrair(4, 0)).toBe(4);
    });
    test('0 - 0 = 0 ', () => {
        expect(calc.subtrair(0, 0)).toBe(0);
    });
    test('-4 - -4 = 0', () => {
        expect(calc.subtrair(-4, -4)).toBe(0);
    });
    //multiplicar
    test(' 2 * 2 = 4', () => {
        expect(calc.multiplicar(2, 2)).toBe(4);
    });
    test('4 * 0  = 4', () => {
        expect(calc.multiplicar(4, 0)).toBe(0);
    });
    test('0 * 0 = 0 ', () => {
        expect(calc.multiplicar(0, 0)).toBe(0);
    });
    test('-4 * -4 = 16', () => {
        expect(calc.multiplicar(-4, -4)).toBe(16);
    });


    // dividir
    test('8 / 2 = 4', () => {
        expect(calc.dividir(8, 2)).toBe(4);
    });
    test('5 / 2 = 2.5', () => {
        expect(calc.dividir(5, 2)).toBe(2.5);
    });
    test('0 / 4 = 0', () => {
        expect(calc.dividir(0, 4)).toBe(0);
    });
    test('Divisão por zero retorna "Erro"', () => {
        expect(calc.dividir(4, 0)).toBe('Erro , número negativo');
    });

    // ao quadrado
    test('2² = 4', () => {
        expect(calc.aoQuadrado(2)).toBe(4);
    });
    test('0² = 0', () => {
        expect(calc.aoQuadrado(0)).toBe(0);
    });
    test('-3² = 9', () => {
        expect(calc.aoQuadrado(-3)).toBe(9);
    });

    // raiz quadrada
    test('√9 = 3', () => {
        expect(calc.raizQuadrada(9)).toBe(3);
    });
    test('√0 = 0', () => {
        expect(calc.raizQuadrada(0)).toBe(0);
    });
    test('√-3 retorna "Erro"', () => {
        expect(calc.raizQuadrada(-1)).toBe('Erro');

    });
    })
