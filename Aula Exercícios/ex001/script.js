function verificar() {

    var anos = window.document.getElementById('txtidade')
    idade = Number(anos.value)
    var sex = window.document.querySelector('input[name=sexo]:checked').value
    var result = window.document.getElementById('result')

    if (idade == '') {
        alert("Verifique o preenhimento dos campos e tente novamente")
    }
    if (sex == "fem") {
        if (idade <= 20) {
            result.innerHTML = `Detectamos uma jovem de ${idade} anos`
        } else if (idade <= 50) {
            result.innerHTML = `Detectamos uma mulher de ${idade} anos`
        } else if (idade <= 100) {
            result.innerHTML = `Detectamos uma senhora de ${idade} anos`
        }
    } else {
        if (idade <= 20) {
            result.innerHTML = `Detectamos um jovem de ${idade} anos`
        } else if (idade <= 50) {
            result.innerHTML = `Detectamos um homem de ${idade} anos`
        } else if (idade <= 100) {
            result.innerHTML = `Detectamos um senhor de ${idade} anos`
        }
    }
}