//Visualizando o callback na prática utilizando map

const nums = [1, 2, 3, 4, 5]
const dobro = n => n * 2
console.log(nums.map(dobro))

//const dobro = (n, i, a) => n * 2 + i + a.length
//console.log(nums.map(dobro))

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)
console.log(nomes, letras)

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    {nome: 'Tesoura', qtde: 1, preco: 19.20  },
]

//Criar 2 funções para mapear esse array
//1º array produtos = [] só terá nomes dos produtos
//2º array numeros = [] será o resultado da qtd * preco

/*Minha Solução
const getNome = carrinho.map(el => el.nome)
const getValor = carrinho.map(el => el.preco * el.qtde)

console.log(`Produtos: ${getNome} `)
console.log(`Valor da Compra:${getValor}`)
*/

/*Solução professor:

const getNome = item => item.nome
console.log(carrinho.map(getNome))

const getTotal = item => item.qtde * item.preco
const totais = carrinho.map(getTotal)
console.log(totais)
*/

//Funcão map feita do zero

Array.prototype.meuMap = function (fn) {
    const novoArray = []    
    for (let i = 0; i < this.length; i++){   
        novoArray.push(fn(this[i], i, this))
    }
    return novoArray
}

const getNome = item => item.nome
console.log(carrinho.meuMap(getNome))

const getTotal = item => item.qtde * item.preco
const totais = carrinho.meuMap(getTotal)
console.log(totais)
