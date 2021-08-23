let arrayNumeros = []
let finalizado = false
let divResult = document.getElementById('divResultado')

function adicionarNumero() {
    let numDigitado = Number(document.getElementById('txtNumDigitado').value)
    let numAdicionados = document.getElementById('tabelaNumAdicionados')

    if (numDigitado == '' || numDigitado <= 0) {
        window.alert('Favor inserir um número positivo válido!')
    } else if (numDigitado > 100) {
        window.alert('O número informado deve estar entre 1 e 100')
    } else if (arrayNumeros.indexOf(numDigitado) == -1) {
        let optionNum = document.createElement('option')
        optionNum.setAttribute('id', `opt_${numDigitado}`)
        optionNum.setAttribute('value', `${numDigitado}`)
        optionNum.innerHTML = `Valor ${numDigitado} adicionado.`
        numAdicionados.appendChild(optionNum) //adiciona cada novo número a tabela de números
        divResult.innerHTML = ''
        arrayNumeros.push(numDigitado)
        finalizado = false

    } else {
        window.alert('O número informado já foi adicionado a lista!')
    }

}

function analisarNumeros() {

    //Função Descobrir o números de elementos dentro do array
    function qtdElementosArray(array) {
        let tamanho = array.length
        return ` Ao todo, temos ${tamanho} números cadastrados.`
    }

    //Função Descobrir qual o maior valor dentro do array
    function maiorValorArray(array) {
        array.sort()
        let maiorNumero = array[(array.length - 1)]
        return ` O maior valor informado foi ${maiorNumero}.`
    }

    //Função Descobrir qual o menor valor dentro do array
    function menorValorArray(array) {
        array.sort()
        let menorNumero = array[0]
        return ` O menor valor informado foi ${menorNumero}.`
    }

    //Função Somar todos os valores dentro do array
    function somarValoresArray(array) {
        let soma
        soma = 0
        for (let pos = 0; pos < array.length; pos++) {
            let numeroContidoArray = array[pos];
            soma += numeroContidoArray
        }
        return ` Somando todos os valores, temos ${soma}.`
    }

    //Função que apresenta a média de todos os valores dentro do array 
    function mediaValoresArray(array) {
        let soma
        soma = 0
        for (let pos = 0; pos < array.length; pos++) {
            let numeroContidoArray = array[pos];
            soma += numeroContidoArray
        }
        return `A média dos valores digitados é ${Number(soma / array.length)}.`
    }

    //Função para criar um parágrafo e apresentar cada uma das análise feitas com os números
    function criarParagrafos(id, mensagem) {
        let pResultado = document.createElement('p')
        pResultado.setAttribute('id', `${id}`)
        pResultado.innerHTML = `${mensagem}`
        divResult.appendChild(pResultado)
    }

    if (finalizado == false && arrayNumeros.length > 0) {
        criarParagrafos('func_qtdElementosArray', qtdElementosArray(arrayNumeros))
        criarParagrafos('func_maiorValorArray', maiorValorArray(arrayNumeros))
        criarParagrafos('func_menorValorArray,', menorValorArray(arrayNumeros))
        criarParagrafos('func_somarValoresArray', somarValoresArray(arrayNumeros))
        criarParagrafos('func_mediaValoresArray', mediaValoresArray(arrayNumeros))

        finalizado = true
    } else {
        window.alert('Adicione valores antes de finalizar!')
    }
}