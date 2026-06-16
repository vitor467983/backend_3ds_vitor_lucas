
const fs = require('fs')
const path = require('path')
const frasePreferida = 'Gosto de música e violão!'
const log = `Atenção, você está offLine...`

try {
    const arquivo = path.resolve(__dirname, 'frase.md')
fs.writeFileSync(arquiv, frasePreferida, 'utf-8')

// Reescreve totalmente o conteúdo
fs.writeFileSync(arquivo, log, 'utf-8')
} catch (error) {
    console.log(error.message)
}