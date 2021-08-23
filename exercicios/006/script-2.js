let arrayNumeros = []
let finalizado = false
let divResult = document.getElementById('divResultado')

function adicionarNumero() {
    let numDigitado = Number(document.getElementById('txtNumDigitado').value)
    let numAdicionados = document.getElementById('tabelaNumAdicionados')

    if (numDigitado == '' || numDigitado <= 0) {
        window.alert('Favor inserir um número válido!')
    } else if (numDigitado > 100) {
        window.alert('O número informado deve estar entre 1 e 100')
    } else if (finalizado == true) {
        //Se ao clicar em adicionar o usuário já tenha feito a análise então o programa irá
        //limpar todas as informações da tela
        numAdicionados.innerHTML = ''
        divResult.innerHTML = ''

    } else {
        let optionNum = document.createElement('option')
        optionNum.setAttribute('id', `opt_${numDigitado}`)
        optionNum.setAttribute('value', `${numDigitado}`)
        optionNum.innerHTML = `Valor ${numDigitado} adicionado.`
        numAdicionados.appendChild(optionNum) //adiciona cada novo número a tabela de números

        arrayNumeros.push(numDigitado) //adiciona cada novo número ao array
        console.log(arrayNumeros)

        //limpa o campo número para facilitar a inserção do próximo
        // a fazer...
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

    /* Lista a fazer...
    Função Somar todos os valores dentro do array
    Função que apresenta a média de todos os valores dentro do array
    */

    //Função para criar um parágrafo e apresentar cada uma das análise feitas com os números
    function criarParagrafos(id, mensagem) {
        let pResultado = document.createElement('p')
        pResultado.setAttribute('id', `${id}`)
        pResultado.innerHTML = `${mensagem}`
        divResult.appendChild(pResultado)
    }

    if (finalizado == false) {
        criarParagrafos('func_qtdElementosArray', qtdElementosArray(arrayNumeros))
        criarParagrafos('func_maiorValorArray', maiorValorArray(arrayNumeros))
        criarParagrafos('func_menorValorArray,', menorValorArray(arrayNumeros))
            //criarParagrafos('func_', (arrayNumeros))
            //criarParagrafos('func_', (arrayNumeros))

        //Modifica a varíavel finalizado para true.
        finalizado = true
    }

}