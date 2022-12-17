// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:8000");
let messages = [];
const chat = document.querySelector("#chat");

// Connection opened
socket.addEventListener("open", (event) => {
  console.log("Connected to websocket server");
});

// Listen for messages
socket.addEventListener("message", async (event) => {
  chat.innerHTML = "";
  let message = JSON.parse(event.data.toString());
  console.log(JSON.parse(message.data.toString()));
  setCardUser(message)
  if (message.data) {
    let newMessage = await JSON.parse(message.data.toString());
    let messageDomain = new Message(newMessage.message)
    messageDomain.setDateMessage(new Date(newMessage.dateMessage))
    messages.push(messageDomain);
    console.log('************************************', messages);
  }
  console.log("Message from server ", message.user);
  messages.forEach((msg) => {
    chat.innerHTML += `
    <div id="msg-container">
      <div class="bg-msg-rcv mt-3 text-light">
        <p class="text-msg">${msg.getMessage()}</p>
      </div>
      <span id="msg-time">${msg.getTime()}</span>
    </div>`;
  });
});

const btn = document.querySelector("#sendMessageBtn");
// btn.addEventListener('click', sendMessage);
const message = document.querySelector("#message");
function sendMessage() {
  let msg = new Message(message.value);
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', JSON.stringify(msg));
  socket.send(JSON.stringify(msg));
  message.value = "";
}

socket.addEventListener("close", (event) => {
  socket.send("disconnected");
});
