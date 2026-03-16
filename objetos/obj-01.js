// objetos são estruturas do tipo chave-valor
// pode atribuir de forma dinâmica, assim como em arrays
// objetos tem indices nomeados
// podemos usar (for of) ou (for in)

const carros = {
    nome: "Camaro",
    modelo: "xpto Cam",
    cores : ["amarelo", "preto"],
}
carros
carros.modelo = "Fusca"
carros["nome"] = "Chev"
console.log(carros.modelo)
console.log(carros.nome)


for(carro in carros){ console.log(carro) }