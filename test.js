import WebSocket from "ws";

const test = {
  id: 1515,
  message: "Hello!",
};

const client = new WebSocket("ws://localhost:8080");

client.on('open', function open() {
  client.send(JSON.stringify(test));
});

client.on('message', function message(data) {
  console.log('received: %s', data);
});