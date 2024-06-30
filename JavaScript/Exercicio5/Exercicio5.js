var frase = "Hoje tem aula"
var primeira = frase.charAt(0)

console.log(primeira)

var letra = ""
var primeira_palavra = ""
var i = 0
while ( letra != " " ) {
    letra = frase.charAt(i)
    primeira_palavra += letra
    i++
}

console.log(primeira_palavra)

var nome = "Maria Joaquina"
var primeiro = nome.substring(0, 5)
console.log(primeiro)

var fraseComposta = "o resultado do split é um array"
console.log(fraseComposta.split(" "))
var resultadoSplit = fraseComposta.split(" ")[0]
console.log(resultadoSplit)
console.log("Oi! Você sabia que " + fraseComposta + "?")

console.log(fraseComposta.toUpperCase())
var fraseMinuscula = "TESTE, ESTÁ TUDO EM MAIÚSCULA"
console.log(fraseMinuscula.toLowerCase())
var minuscula = fraseMinuscula.charAt(0).toUpperCase()
var primeiro = fraseMinuscula.substring(1, fraseMinuscula.length)
console.log(fraseMinuscula.split(" ")[0])