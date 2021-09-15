function exec(fn, a = 0, b = 0) {
    fn(a, b)
}
const somarNoTerminal = (x, y) => console.log(x + y)

const subtrairNoTerminal = (w, z) => console.log(w - z)

exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 56, 38)