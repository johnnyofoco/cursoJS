function tabuada() {
    let num = Number(document.getElementById('txtn').value)
    let tab = document.getElementById('seltab')

    console.log(`${num} - ${typeof(num)}`)

    if (num < 0 || num == '') {
        window.alert('Informe um número valído!')
    } else {
        tab.innerHTML = ''
        for (let c = 0; c <= 10; c++) {
            let opt = document.createElement('option')
            opt.setAttribute('value', `${c}`)
            opt.innerHTML = `${c} * ${num} = ${c * num}`
            tab.appendChild(opt)
        }
    }



}