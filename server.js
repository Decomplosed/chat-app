const express = require('express')
const http = require('http')
const path = require('path')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use(express.static(path.join(__dirname, 'public')))

io.on('connection', socket => {
  socket.emit('message', 'Welcome to ChatCord')

  socket.broadcast.emit('message', 'A user has joined the chat')
})

const PORT = 3000 || process.env.PORT

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

function outputMessage(message) {
  const div = document.createElement('div')
  div.classList.add('message')
  div.innerHTML = `
    <p class='meta>Brad <span>9:12pm</span></p>
    <p class='text>
      ${message}
    </p>
    `

  document.querySelector('.chat-messages').appendChild(div)
}
