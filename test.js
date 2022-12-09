import WebSocket from "ws";

let clients = [new WebSocket("ws://localhost:8080")];
clients.map((client) => {
  client.on("message", (msg) => console.log("Recebido: ", msg.toString()));
}); // Esperamos o cliente conectar com o servidor usando async/await
await new Promise((resolve) => clients[0].once("open", resolve)); // Imprimi "Hello!" duas vezes, um para cada cliente
const test = {
  id: 1515,
  message: "Hello!",
};
clients[0].send(JSON.stringify(test));
