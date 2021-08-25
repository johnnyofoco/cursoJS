//Create a range function

//range(5) - > [1, 2, 3, 4, 5]
//range(6, 11) - > [6, 7, 8, 9, 10, 11]
//range(10, 19, 2) - > [10, 12, 14, 16, 18]
//range(6, 2) - > [6, 5, 4, 3, 2]
//range(8, -3, 4) - > [8, 4, 0]

//Primeiro parametro é o numInicio
//Segundo parametro é o numFim =  0 default
//Terceiro parametro é o passo = 1 default

//Regras gerais
//
//Se numInicio > numFim então passo = -1

function range(...nums) {
    let result = 0

    for (let n of nums) {
        total += n
    }

    return result
}

range()