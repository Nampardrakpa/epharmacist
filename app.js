const express = require("express")

const app = express()

// module.exports = app

const port = 4000
app.listen(port,() => {
    console.log(`App running on port ${port} ..`)
})