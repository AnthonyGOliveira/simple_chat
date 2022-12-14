const {server, wss} = require("./http")
const port = 8000
require("./websocket")

server.listen(port, () => {
    console.log(`Server listen on port ${port}`);
})