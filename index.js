const express = require("express")
const app = express()

const { config } = require("./config")

app.get("/", function (req, res) {
    res.send("Hello World")
})


app.get("/json", function (req, res) {
    res.json({ "hello": "world" })
})

app.listen(config.port, function () {
    console.log("App Listening on: http://localhost:" + config.port)

})