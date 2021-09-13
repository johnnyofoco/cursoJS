function bomDia() {
    console.log('Bom dia!!!')
}

const boaTarde = function() {
    console.log('Boa Tarde!!!')
}

//1) Passar uma função como parâmetro para outra função
function executarQualquerCoisa(fn) {
    if (typeof fn == 'function') {
        fn()
    } else {
        console.log('O parâmetro passado não é do tipo function!')
    }
}

executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

// 2) Retornar uma função a a partir de uma outra função
function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp)
    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

const resultadoPotencia = potencia(3)(4)
console.log(resultadoPotencia)