const http = require('node:http')
const porta = 8081

const server = http.createServer((req, res)=>{
 // o que vem da url?
 res.statusCode = '201'
 res.setHeader('Content-Type', 'text/html', 'charset=utf-8')
 res.end('<h3>HTML Rocks!</h3>')
})

server.listen(porta, ()=>{
    console.log(`Servidor rodando na porta 
        http://localhost:${porta}`)
})