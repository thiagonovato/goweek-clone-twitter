const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();

const server = require('http').Server(app)
const io = require('socket.io')(server)

mongoose.connect('mongodb://goweek:goweek123@ds121588.mlab.com:21588/goweek-backend', {
    useNewUrlParser: true
})

app.use((req, res, next) => {
    req.io = io

    return next()
})

app.use(cors())
app.use(express.json())
app.use(require('./routes'))

const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log(';) Servidor iniciado na porta ' + port)
})