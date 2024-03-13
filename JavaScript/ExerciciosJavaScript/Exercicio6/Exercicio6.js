var dia = new Date()
var meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
console.log(dia.getDate())
console.log(meses[dia.getMonth()])
console.log(dia.getFullYear())

console.log(dia.getDate() + " de " + meses[dia.getMonth()] + " de " + dia.getFullYear())

var aniversario = new Date(1970, 8, 10)
var dia_semana = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"]
console.log(aniversario.getDay())
console.log(dia_semana[aniversario.getDay()])

var hora = new Date()
console.log(hora.getHours())

function setDoisDigitos(tempo) {
    if (tempo < 10) {
        return "0" + tempo
    } else {
        return tempo
    }
}

console.log(setDoisDigitos(hora.getHours()) + " : " + setDoisDigitos(hora.getMinutes()) + " : " + hora.getSeconds())