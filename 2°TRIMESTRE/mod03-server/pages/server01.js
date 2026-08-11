const http = require('http')
const fs = require('fs')
const path = require('path')
const porta = process.env.PORT || 3000

const home = path.join(__dirname, 'index.html')
const sobre = path.join(__dirname, 'sobre.html')
const notFound = path.join(__dirname, '404.html')

const server = http.createServer((req, res) => {
    const novaUrl = new URL(req.url, `http://${req.headers.host}`)
    const caminhoUrl = novaUrl.pathname

    if (caminhoUrl === '/' || caminhoUrl === '/index.html') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        return res.end(fs.readFileSync(home, 'utf-8'))
    }

    if (caminhoUrl === '/sobre' || caminhoUrl === '/sobre.html') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        return res.end(fs.readFileSync(sobre, 'utf-8'))
    }

    res.statusCode = 404
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    return res.end(fs.readFileSync(notFound, 'utf-8'))
})

server.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})