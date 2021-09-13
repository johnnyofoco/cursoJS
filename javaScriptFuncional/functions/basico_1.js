//Function declaration = A função geralmente possui um nome é acionada durante o código.
function bomDia() {
    console.log('Bom dia!')
}

bomDia()

// Function expression = Armazena a função geralmente anonima dentro da variável
const boaTarde = function() {
    console.log('Boa Tarde!')
}

boaTarde()

function somar(a = 0, b = 0) {
    return a + b
}
let resultado = somar(3, 4)
console.log(resultado)

//Recebe mais parâmetros que exigido pela função
resultado = somar(3, 5, 5, 6, 7, 8)
console.log(resultado)

resultado = somar()
console.log(resultado)