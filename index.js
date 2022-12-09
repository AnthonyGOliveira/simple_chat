import { WebSocketServer } from "ws";

const server = new WebSocketServer({ port: 8080 });

let sockets = [];

let counter = 0;

server.on("connection", function connection(socket) {
  sockets.push(socket);
  socket.on("message", function message(msg) {
    let msgConverter = JSON.parse(msg);
    console.log("received: %s", msg, sockets.length);
    sockets.forEach((s) => {
      if (msgConverter.message == "Hello!") {
        msgConverter.id++
        counter++;
        s.send(JSON.stringify(msgConverter));
        console.log("Hello received " + counter + " times");
      }
    });
  });
  socket.on("close", () => {
    sockets = sockets.filter((s) => s !== socket);
  });
});
