// São agrupamentos complexos do tipo
// Chave-Valor (k, v)
// Agrupa qualquer tipo de dado

const carro = {
    portas : 4,
    modelo: 'Camaro zl1',
    cores : ['Preto', 'Amarelo', 'Branco'],
    acao: function onOff(){return 'Liga/Desliga'}
} // fim do escopo
console.log(carro.cores[0])
console.log(carro.acao) // apenas menciona
console.log(carro.acao()) // executa de fato