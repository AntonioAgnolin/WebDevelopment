function escreverNome() {
    console.log("Antônio Agnolin")
}

escreverNome()

function converterTemperatura(celsius) {
    var fah = (celsius * 1.8) + 32
    return fah
}

var fahreinheit = converterTemperatura(25)
console.log(fahreinheit)

function calcularDiaria() {
    return (2000/30).toFixed(2)
}

var diaria = calcularDiaria()
alert(diaria)

var bonus
function calcularDiaria2(salario, dias) {
    bonus = 300
    return (salario/dias).toFixed(2)
}

var diaria = calcularDiaria2(8000, 22)
alert(diaria)
alert(bonus)