//Create a range function

function range(...nums) {
    let result = []
    let paramUm
    let paramDois
    let paramTres

    //Laços que vasculha o parâmetor da função que é um array
    for (let n of nums) {
        result.push(n)
    }

    //Quando a função recebe nenhum parâmetro
    if (result.length < 1) {
        result = ''
        console.log('[ERRO]: Favor digitar ao menos um parâmetro!')

        //Quando a função recebe 1 parâmetro
    } else if (result.length == 1) {
        paramUm = result

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
        //Quando a função recebe 2 parâmetros
    } else if (result.length == 2) {
        paramUm = result[0]
        paramDois = result[1]

        result = []

        if (paramUm <= paramDois) {

            while (paramUm <= paramDois) {
                result.push(paramUm)
                paramUm++
                result.sort((a, b) => a - b)
            }
        } else {
            while (paramUm >= paramDois) {
                result.push(paramUm)
                paramUm--
                result.sort((a, b) => b - a)
            }
        }

        //Quando a função recebe 3 parâmetros
    } else if (result.length == 3) {
        paramUm = result[0]
        paramDois = result[1]
        paramTres = result[2]

        result = []

        if (paramUm <= paramDois) {

            while (paramUm <= paramDois) {
                result.push(paramUm)
                paramUm += paramTres
                result.sort((a, b) => a - b)
            }
        } else {
            while (paramUm >= paramDois) {
                result.push(paramUm)
                paramUm -= paramTres
                result.sort((a, b) => b - a)
            }
        }


        //Quando a função recebe 4 ou + parâmetros
    } else if (result.length > 3) {
        console.log(`[ERRO]: mais que 3 parâmetros. Recebeu: ${result.length} parâmetros a função não será executada!`)
        result = ''
    }

    return result

}


console.log('range(5) -> [1, 2, 3, 4, 5] Resultado: ')
console.log(range(5))
console.log('----------------------------------------')

console.log('range(6, 11) -> [6, 7, 8, 9, 10, 11] Resultado: ')
console.log(range(6, 11))
console.log('----------------------------------------')

console.log('range(10, 19, 2) -> [10, 12, 14, 16, 18] Resultado: ')
console.log(range(10, 19, 2))
console.log('----------------------------------------')

console.log('range(6, 2) -> [6, 5, 4, 3, 2] Resultado: ')
console.log(range(6, 2))
console.log('----------------------------------------')

console.log('range(8, -3, 4) -> [8, 4, 0] Resultado: ')
console.log(range(8, -3, 4))