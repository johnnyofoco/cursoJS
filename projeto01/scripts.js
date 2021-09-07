let section = document.getElementById('sec-inicial')
let form = document.getElementById('div')
console.log(form)

function cadastroFuncionario() {
    if (form == null) {
        form = document.createElement('div')
        form.setAttribute('id', 'cadastroFuncionario'),
            section.appendChild(form)
    }
}