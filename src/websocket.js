const { wss } = require("./http");
const WS = require("ws");
const User = require("../domain/user")
let users = [];

wss.on("connection", (ws) => {
  let user = new User();
  user.setName('Anthony')
  ws.user = user;
  users.push(ws);
  console.log(wss.clients.size);
  ws.send(JSON.stringify(user));
  ws.on("message", function message(data, isBinary) {
    msg = {
      data: data.toString(),
      user: ws.user
    }
    wss.clients.forEach(function each(client) {
      if (client.readyState === WS.OPEN) {
        client.send(JSON.stringify(msg), { binary: isBinary });
      }
    });
  });
  ws.on("close", () => {
    console.log(wss.clients.size, ws.user.id);
    console.log("Usuário desconectado");
  });
});
