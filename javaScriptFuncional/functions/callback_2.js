const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

//console.log(`imprimindo: ${ __dirname }`)

function exibirConteudo(_, conteudo) {
    console.log(conteudo.toString())
}

console.log('Início...')
fs.readFile(caminho, {}, exibirConteudo)
console.log('Fim...')

console.log('Início Sync...')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim Sync...')