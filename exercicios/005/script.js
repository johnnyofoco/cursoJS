function tabuada() {
    var num = Number(document.getElementById('txtn').value)
    var tab = document.getElementById('seltab')

    if ()


        for (let c = 0; c <= 10; c++) {
        var opt = document.createElement('option')
        opt.setAttribute('value', `${c}`)
        opt.innerHTML = `${c} * ${num} = ${(c*num)}`
        tab.appendChild(opt)
    }




}