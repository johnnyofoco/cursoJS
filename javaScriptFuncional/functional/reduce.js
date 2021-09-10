/*
 * FUNCTION REDUCE
 *  O primeiro parâmetro é uma função que irá processar os elementos do array, e o segundo parâmetro é o valor inicial
 *  Recebe o elemento, o indice e o array assim tambem é no map e filter
 *
 */

const numbers = [1, 2, 3, 4, 5, 6]

const sum = (total, el) => total + el
const avg = (acc, el, i, array) => {
    if (i === array.length - 1) {
        return (acc + el) / array.length
    } else {
        return acc + el
    }
}

console.log(numbers.reduce(sum))
console.log(numbers.reduce(avg))