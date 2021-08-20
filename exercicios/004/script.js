function contar() {

    //Dados de Entrada
    var inicio = Number(window.document.getElementById('inicio').value)
    var fim = Number(window.document.getElementById('fim').value)
    var passo = Number(window.document.getElementById('passo').value)
    var res = window.document.getElementById('res')
    res.innerHTML = ``

    //console.log(`inicio: ${inicio} fim: ${fim} passo: ${passo}`)

    //to do list
    // -- validação se as informações são inválidas
    // -- fazer funcionar o contador de forma invertida.

    if (inicio == 0 || fim == 0) {
        res.innerHTML = 'Impossível contar!'
    } else if (passo <= 0) {
        window.alert('Passo inválido, considerando 1')
        passo = 1
    } else if (inicio < fim) {

        //Processamento
        for (inicio; inicio <= fim; inicio += passo) {

            var p = document.createElement('p')
            p.setAttribute('id', `p_${inicio}`)
            p.innerText = `${inicio}`

            var iconeDedo = document.createElement('img')
            iconeDedo.setAttribute('id', 'iconeDedo')
            iconeDedo.setAttribute('src', 'imagens/dedo.png')

            var iconeBandeira = document.createElement('img')
            iconeBandeira.setAttribute('id', 'iconeBandeira')
            iconeBandeira.setAttribute('src', 'imagens/bandeira.png')

            //Saída
            res.appendChild(p)

            if (inicio < fim) {
                res.appendChild(iconeDedo)
            }
        }
        res.appendChild(iconeBandeira)

    } else {
        //Tratamento para funcionar com contagem regressiva
        for (inicio; inicio >= fim; inicio -= passo) {

            var p = document.createElement('p')
            p.setAttribute('id', `p_${inicio}`)
            p.innerText = `${inicio}`

            var iconeDedo = document.createElement('img')
            iconeDedo.setAttribute('id', 'iconeDedo')
            iconeDedo.setAttribute('src', 'imagens/dedo.png')

            var iconeBandeira = document.createElement('img')
            iconeBandeira.setAttribute('id', 'iconeBandeira')
            iconeBandeira.setAttribute('src', 'imagens/bandeira.png')

            //Saída
            res.appendChild(p)

            if (inicio > fim) {
                res.appendChild(iconeDedo)
            }
        }
        res.appendChild(iconeBandeira)
    }


}