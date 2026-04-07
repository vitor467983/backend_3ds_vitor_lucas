// Funções de retorno exigem a
// cláusula/termo 'return'
// isso permite fazer operações
// sequenciais com o resultado
// sequenciais com o resultado
// armazenar funções em variáveis

function sobraDoSalario(meuSalario){
    const contaDeluz = 150.0
    const aluguel = 1400.0
    const resto = meuSalario - (contaDeluz+aluguel)
    console.log(`O que restou no fim do mês ${resto}`)
}