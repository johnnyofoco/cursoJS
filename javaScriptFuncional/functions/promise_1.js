
let p = new Promise(function (cumprirPromessa) {
    cumprirPromessa(3)    
})

p.then(function (valorPrometido) {
    console.log(valorPrometido)
})