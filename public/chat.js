// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:8000");
let messages = [];
const chat = document.querySelector("#chat");

// Connection opened
socket.addEventListener("open", (event) => {
  console.log("Connected to websocket server");
});

// Listen for messages
socket.addEventListener("message", (event) => {
  chat.innerHTML = "";
  console.log(event.data);
  let message = JSON.parse(event.data.toString());
  messages.push(message);
  console.log("Message from server ", message.user);
  messages.forEach((msg) => {
    chat.innerHTML += `
    <div>
      <div class="bg-msg-rcv mt-3 text-light">
        <p class="text-msg">${msg.data}</p>
      </div>
    </div>`;
  });
});

const btn = document.querySelector("#sendMessageBtn");
// btn.addEventListener('click', sendMessage);
const message = document.querySelector("#message");
function sendMessage() {
  socket.send(message.value);
  message.value = "";
}

socket.addEventListener("close", (event) => {
  socket.send("disconnected");
});
