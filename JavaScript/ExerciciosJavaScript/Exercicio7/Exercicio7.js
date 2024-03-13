var produto = new Object()
produto.nome = "Caneta"
produto.preco = 24.99
produto.cor = "azul"

console.log(produto.nome)
console.log(produto.preco)
console.log(produto.cor)

function retornarInfo() {
    return " O produto " + this.nome + ", da cor " + this.cor + ", custa: R$" + this.preco
}

produto.info = retornarInfo

alert(produto.info())