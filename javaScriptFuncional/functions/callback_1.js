function exec(fn, a, b) {
    fn(a, b)
}
const somarNoTerminal = (x, y) => console.log(x + y)
const subtrairNoTerminal = (w, z) => console.log(w - z)
const subtrair = (e, f) => e - f

exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 182, 27)

const r = exec(subtrair, 50, 25)
console.log(r)


//passar uma função como parâmetro para outra função
//e quando acontece um evento a função é chamada

const fn = () => console.log('Exec...')
setInterval(fn, 1000)