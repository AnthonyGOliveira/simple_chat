const express = require("express")
const path = require("path")
const app = express()
const getAllUsers = require("../aplication/all_users_use_case")

app.use(express.static(path.join(__dirname,"..","public" )))
app.get("/", (req, res) => {
    res.render("index.html")
})

app.get("/users", (req, res) => {
    res.json(getAllUsers());
})

module.exports = app