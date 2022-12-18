const userConnect = {}
function messageReceive(message){
  return userConnect.id != message.id;
}

// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:8000")
let messages = []
const chat = document.querySelector("#chat")

// Connection opened
socket.addEventListener("open", (event) => {
  console.log("Connected to websocket server")
})

// Listen for messages
socket.addEventListener("message", async (event) => {
  chat.innerHTML = ""
  let message = JSON.parse(event.data.toString())
  if (!userConnect.hasOwnProperty('id')) {
    userConnect.id = message.id
    userConnect.name = message.name
  }
  setCardUser(userConnect)
  if (message.data) {
    let newMessage = await JSON.parse(message.data.toString())
    let messageDomain = new Message(newMessage.message, message.user.id)
    messageDomain.setDateMessage(new Date(newMessage.dateMessage))
    messages.push(messageDomain)
    getUsers();
  }
  messages.forEach((msg) => {
    chat.innerHTML += `
    <div id="msg-container" ${messageReceive(msg) ? '' : 'class="msg-send"'}>
      <div ${messageReceive(msg) ? 'class="bg-msg-rcv mt-3 text-light"': 'class="bg-msg-snd mt-3 text-light"'}>
        <p class="text-msg">${msg.getMessage()}</p>
      </div>
      <span id="msg-time" ${messageReceive(msg) ? 'class="msg-time-received"' : 'class="msg-time-default"'}>${msg.getTime()}</span>
    </div>`
  })
})

const btn = document.querySelector("#sendMessageBtn")
// btn.addEventListener('click', sendMessage)
const message = document.querySelector("#message")
function sendMessage() {
  let msg = new Message(message.value)
  socket.send(JSON.stringify(msg))
  message.value = ""
}

socket.addEventListener("close", (event) => {
  socket.send("disconnected")
})
