//############### DESAFIO 1 ##################
// somar(3)(4)(5)
function somar(a) {
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
}

const resultado = somar(3)(4)(5)
console.log(`Resultado do desafio 1: ${resultado}`)

//############### DESAFIO 2 ##################
// calcular(3)(7)(fn)
function calcular(a) {
    return function(b) {
        return function(fn) {
            return fn(a, b)
        }
    }
}

function multiplicacao(a = 0, b = 0) {
    return a * b
}

function soma(a = 0, b = 0) {
    return a + b
}

function subtracao(a = 0, b = 0) {
    return a - b
}

let resultado2 = 0

//fn -> 3 * 7
resultado2 = calcular(3)(7)(multiplicacao)
console.log(`Resultado do desafio 2 (fn -> 3 * 7): ${resultado2}`)

//fn -> 3 + 7
resultado2 = calcular(3)(7)(soma)
console.log(`Resultado do desafio 2 (fn -> 3 + 7): ${resultado2}`)

//fn -> 3 - 7
resultado2 = calcular(3)(7)(subtracao)
console.log(`Resultado do desafio 2 (fn -> 3 - 7): ${resultado2}`)