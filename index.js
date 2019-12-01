const express = require("express")
const app = express()

const config = require("./config")
const moviesRouter = require("./routes/movies")

app.use("/api/movies", moviesRouter)

app.listen(config.port, function () {
    console.log("App Listening on: http://localhost:" + config.port)

})