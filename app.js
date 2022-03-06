const express = require('express')
const app = express()

const http = require('http')

const server = http.createServer(app)

server.listen(3000, ()=> {
        console.log('servidor corriendo http://localhost:3000')
})

const {Server} = require('socket.io')
const io = new Server(server)

io.on('connection', (socket)=>{
    //console.log('Un usario se ha conectado')
    /*socket.on('chat', (msg)=>{
        console.log('Mensaje: ' +msg)
        })*/
    socket.on('chat', (msg)=>{
        io.emit('chat', msg)
    })   
})

app.get('/', (req, res )=>{
    //res.send('<h1>app de chat</h1>')
    res.sendFile(`${__dirname}/cliente/index.html`)
})

app.listen()