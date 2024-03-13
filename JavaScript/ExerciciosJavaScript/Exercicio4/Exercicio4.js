var z = 4
var w = 3
console.log(z+w)

var x = "4"
var y = "3"
console.log(x+y)

var sorteio
var mega = new Array()
var i = 1
while ( i < 6 ) {
    sorteio = Math.ceil(Math.random()*60)
    if ( mega.indexOf(sorteio) < 0 ) {
        mega.push(sorteio)
        i++
    }
}

function ordenarNumeros(a,b) {
    return a-b
}

mega.sort(ordenarNumeros)
console.log(mega)