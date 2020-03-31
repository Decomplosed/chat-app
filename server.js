const express = require('express')
const http = require('http')
const path = require('path')
const socketio = require('socket.io')
const formatMessage = require('./utils/messages')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use(express.static(path.join(__dirname, 'public')))

const botName = 'ChatCord Bot'

io.on('connection', socket => {
  socket.on('joinRoom', ({ username, room }) => {
    socket.emit('message', formatMessage(botName, 'Welcome to ChatCord'))

    socket.broadcast.emit(
      'message',
      botName,
      formatMessage(botName, 'A user has joined the chat')
    )
  })

  socket.on('disconnect', () => {
    io.emit('message', formatMessage(botName, 'A user has left the chat'))
  })

  socket.on('chatMessage', msg => {
    io.emit('message', formatMessage('USER', msg))
  })
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
