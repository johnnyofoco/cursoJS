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
    let result = []
    let paramUm
    let paramDois
    let paramTres

    for (let n of nums) {
        result.push(n)
    }

    if (result.length < 1) {
        result = ''
        console.log('[ERRO]: Favor digitar ao menos um parâmetro!')
    } else if (result.length == 1) {
        paramUm = result
            //console.log(`paraUm: ${paramUm}`)
        if (paramUm > 1) {
            result = paramUm

            let cont = Number(result)
            let n = 1

            while (n < cont) {
                result.push(n)
                n++
                result.sort((a, b) => a - b)
            }
        }

    } else if (result.length == 2) {


    } else if (result.lengthlt == 3) {

    } else if (result.length > 3) {
        console.log(`[ERRO]: mais que 3 parâmetros. Recebeu: ${result.length} parâmetros a função não será executada!`)
        result = ''
    }
    return result

}

console.log(range(1000))