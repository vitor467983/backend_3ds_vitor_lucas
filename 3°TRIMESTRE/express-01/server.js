import express from 'express'
import path from 'path' // resolver conflitos de pasta
const PORT = process.env.PORT || 3000
const app = express()
const baseDir = import.meta.dirname
// Usar Middleware (software guardião)
app.use(express.static(path.join(baseDir, 'src/public')))

app.get('/', (req, res) => { // calback ou retorno
    res.sendFile('src/pages/index.html', {root: baseDir})
})

app.listen(PORT, () => { console.log('Servidor Ok na porta '+PORT)})