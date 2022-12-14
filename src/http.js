const http = require('http')
const WS = require("ws")
const app = require("./app")
const server = http.createServer(app)
const wss = new WS.Server({ server: server })

module.exports = {server, wss}