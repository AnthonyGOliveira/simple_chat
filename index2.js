const express = require("express")
const http = require('http')
const WS = require("ws")
const app = express()
const server = http.createServer(app)
const wss = new WS.Server({ server: server })
const port = 8000

wss.on("connection", (ws) => {
    console.log(`New connection: ${ws.id}`);
    ws.send(`Welcome to the websocket chat`)
    ws.on('message', function message(data, isBinary) {
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WS.OPEN) {
                client.send(data, { binary: isBinary });
            }
        });
    });
})

app.get("/", (req, res) => {
    res.send("Websocket Chat Online");
})

server.listen(port, () => {
    console.log(`Server listen on port ${port}`);
})