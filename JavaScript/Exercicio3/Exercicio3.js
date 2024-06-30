var fruta = new Array()
fruta[0] = "Pêssego"
fruta[1] = "Morango"
fruta[2] = "Maracujá"
fruta[3] = "Pera"
fruta[4] = "Framboesa"
fruta[5] = "Amora"
console.log(fruta)
var pesquisa = fruta.indexOf("Maracujá")
console.log(pesquisa)
var pesquisa2 = fruta.indexOf("Maçã")
console.log(pesquisa2)
fruta.sort()

var fruta = ["Morango","Maracujá","Pera","Framboesa"]
fruta.push("Amora")
fruta.unshift("Pêssego")
fruta.pop()
fruta.shift()
console.log(fruta)
console.log(fruta.length)