const http = require('http')
const fs = require('fs')
const path = require('path')

const porta = 3000

const home = path.join(__dirname, 'pages/index.html')
const sobre = path.join(__dirname, 'pages/sobre.html')
const notFound = path.join(__dirname, 'pages/404.html')
const pinguim = path.join(__dirname, 'images/pinguim.png')
const css = path.join(__dirname, 'public/estilo.css')

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
    if (caminhoUrl === '/' || caminhoUrl === '/public/estilo.css') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/css')
        return res.end(fs.readFileSync(css, 'utf-8'))
    }
    if (caminhoUrl === '/images/pinguim.png') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'image/png')
        return res.end(fs.readFileSync(pinguim))
    }
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    return res.end(fs.readFileSync(notFound, 'utf-8'))
})

server.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})