const chatForm = document.getElementById('chat-form')

const socket = io()

socket.on('message', message => {
  outputMessage(message)
})

chatForm.addEventListener('submit', e => {
  e.preventDefault()

  const msg = e.target.elements.msg.value

  socket.emit('chatMessage', msg)
})

function outputMessage(message) {
  const div = document.createElement('div')

}