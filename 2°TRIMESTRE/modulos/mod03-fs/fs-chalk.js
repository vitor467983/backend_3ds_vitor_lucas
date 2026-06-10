// importar path e fs
// Path possui (join para juntar caminhos e Resolve
// para deduzir subdiretorios e S.O)
// npm -> chalk
const fs = require('fs')
const path = require('path')
const chalk = require('chalk').default

try {
    const caminho = path.resolve(__dirname, 'READM.md')/// Abrir, ler, deletar, editar
    const arquivo = fs.readFileSync(caminho, 'utf-8')
console.log(chalk.green('Arquivo carregado com sucesso!'))
    console.log(arquivo)
} catch (error) {
   console.log(chalk.yellow.bgRed('Falha ao carregar o arquivo. Tente novamente mais tarde.'))
   console.log(chalk.red.bgYellow('Erro interno de leitura de arquivo:\n', error.mensagem))
}