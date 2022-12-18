const express = require("express")
const path = require("path")
const app = express()
const getAllUsers = require("../aplication/all_users_use_case")
const updateNameUser = require("../aplication/update_name_user_use_case")

app.use(express.static(path.join(__dirname, "..", "public")))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.get("/", (req, res) => {
    res.render("index.html")
})

app.get("/users", (req, res) => {
    res.json(getAllUsers());
})

app.patch("/user/update/:id/name", (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    updateNameUser(id, name)
    res.status(200);
})

module.exports = app