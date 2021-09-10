const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Susan', score: 8.6 },
    { name: 'Emma', score: 9.4 },
    { name: 'Peter', score: 9.1 },
]

const greatStudent = student => student.score >= 9
const getScore = el => el.score
const avg = (acc, el, i, array) => {
    if (i === array.length - 1) {
        return (acc + el) / array.length
    } else {
        return acc + el
    }
}

//Crie um array que filtre os objetos com o atributo nota acima de 9, após este filtro, crie um array que traga apenas o atributo nota, como este novo array, some todos os elmentos e depois cálcule a média das notas
console.log(students.filter(greatStudent).map(getScore).reduce(avg))