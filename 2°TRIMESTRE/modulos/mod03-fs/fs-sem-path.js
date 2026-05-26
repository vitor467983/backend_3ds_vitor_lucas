
const fs = require('fs')

// console.log(fs)

const arquivo = fs.readFileSync('./README.md', 'utf-8')
// /workspaces/backend_3ds_vitor_lucas/2°TRIMESTRE/modulos/mod03-fs/README.md
// 2°TRIMESTRE/modulos/mod03-fs/README.md
const arquivoFinal = fs.readFileSync(__dirname+"/README.md", 'utf-8')
console.log(arquivoFinal)