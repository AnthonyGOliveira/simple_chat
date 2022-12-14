const { wss } = require("./http");
const WS = require("ws");
let users = [];

wss.on("connection", (ws) => {
  let user = {
    id: 1 + users.length + 'j',
  };
  ws.user = user;
  users.push(ws);
  console.log(wss.clients.size);
  ws.send(`Welcome user ${users.length}`);
  ws.on("message", function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WS.OPEN) {
        client.send(data, { binary: isBinary });
      }
      if (data.toString() == "disconnected") {
        console.log("Usuário desconectado");
      }
    });
  });
  ws.on("close", () => {
    console.log(wss.clients.size, ws.user.id);
  });
});
