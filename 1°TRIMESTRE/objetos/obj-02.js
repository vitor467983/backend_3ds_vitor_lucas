// Crie um Objeto do tema que escolher
// Crie pelo menos 5 propriedades
// Faça uma impressão para Humanos!
//ex. console.log("Nome do Jogador:" + jogador.nome)

const processadores = {
    nome: "processador",
    modelo: "Ryzen 7 5700x",
    threads : ["16 threads"],
    nucleos : "8 nucleos",
    preco : "R$ 1.300,00"
}
processadores.modelo = "processador"
processadores["nome"] = "Ryzen 7 5700x"
processadores.threads = "16 threads"
processadores.nucleos = "8 nucleos"
processadores.preco = "R$ 1.300,00"
console.log(processadores.modelo)
console.log(processadores.nome)
console.log(processadores.threads)
console.log(processadores.nucleos)
console.log(processadores.preco)

console.log("processador: " + processadores.nome)