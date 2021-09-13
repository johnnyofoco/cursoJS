// arrow function = Trata-se de um função anônima
const felizNatal = () => console.log('Feliz Natal!!!')
felizNatal()

//Se for receber um uníco parâmetro não precisa de parenteses
const saudacao = (nome) => `Fala ${nome}, blz?!?`
console.log(saudacao('Johnny'))


//Operador ...numeros = operador rest
const somar = (...numeros) => {
    console.log(Array.isArray(numeros))
    let total = 0
    for (let n of numeros) {
        total += n
    }
    return total
}

console.log(somar(1, 2, 3))
console.log(somar(1, 2, 3, 4, 5, 6))
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

const potencia = base => exp => Math.pow(base, exp)
console.log(potencia(2)(10))

// this
Array.prototype.ultimo = function() {
    console.log(this[this.length - 1])
}

const numeros = [1, 2, 3, 500]
numeros.ultimo()