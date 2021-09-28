
//Arrow functions:
const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()


//A partir do operador new um objeto do tipo Promisse foi criado.
//Uma promisse recebe uma função
let p = new Promise(function (resolve) {
  resolve(['Ana', 'Pedro', 'João'])
})
//o método then recebe um uníco parâmetro e deve ser do tipo function
//o método then é utilizado para receber o valor gerado pela Promise
    .then(primeiroElemento) 
    .then(primeiroElemento) 
    .then(letraMinuscula)
    .then(console.log)