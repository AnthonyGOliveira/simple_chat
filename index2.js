const express = require("express")
const http = require('http')
const ws = require("ws")
const app = express()
const server = http.createServer(app)
const wss = new ws.Server({ server: server })
const port = 8000

wss.on("connection", (ws) => {
    console.log(`New connection: ${ws}`);
    ws.send(`Welcome to the websocket chat`)
    ws.on("message", (message) => {
        console.log(`Receive message: ${message}`);
        ws.send(`Got your message: ${message}`)
    })
})

app.get("/", (req, res) => {
    res.send("Websocket Chat Online");
})

server.listen(port, () => {
    console.log(`Server listen on port ${port}`);
})