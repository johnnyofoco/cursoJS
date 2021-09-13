function bomDia() {
    console.log('Bom dia!!!')
}

const boaTarde = function() {
    console.log('Boa Tarde!!!')
}

//Passar uma função como parâmetro para outra função
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