var idade = 67
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log(`Não vota`)
} else if (idade < 18 || idade > 65) {
    console.log(`Voto opcional`)
} else {
    console.log(`Voto obrigatório`)
}

console.log('-------------------------------------------')

var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()

console.log(`Agora são exatamente ${hora}:${minutos} horas.`)

if (hora <= 5) {
    console.log('Boa Madrugada!')
} else if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}

console.log('-------------------------------------------')

var agora = new Date()
var diaSem = agora.getDay()

switch (diaSem) {
    case 0:
        console.log(`Hoje é: Domingo`)
        break;

    case 1:
        console.log(`Hoje é: Segunda-Feira`)
        break;

    case 2:
        console.log(`Hoje é: Terça-Feira`)
        break;

    case 3:
        console.log(`Hoje é: Quarta-Feira`)
        break;

    case 4:
        console.log(`Hoje é: Quinta-Feira`)
        break;

    case 5:
        console.log(`Hoje é: Sexta-Feira`)
        break;

    case 6:
        console.log(`Hoje é: Sabádo`)
        break;

    default:
        console.log('[ERRO] Dia inválido!')
        break;
}
