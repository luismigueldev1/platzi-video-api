const express = require("express")
const cors = require("cors")
const app = express()

const config = require("./config")
const moviesRouter = require("./routes/movies")

const notFoundHandler = require("./utils/middleware/notFoundHandler")

//middlewares
app.use(express.json())
app.use(cors())

//routes
app.use("/api/movies", moviesRouter)

//Not Found Middleware
app.use(notFoundHandler)

app.listen(config.port, function () {
    console.log("App Listening on: http://localhost:" + config.port)

})