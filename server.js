const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

const PORT = 3000 || process.env.PORT

app.listen(PORT, () => {
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
