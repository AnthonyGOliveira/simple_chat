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
  messages.push(event.data);
  console.log("Message from server ", event.data);
  messages.forEach((msg) => {
    chat.innerHTML += `<div class="bg-primary m-3 p-1 text-light">${msg}</div>`;
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
