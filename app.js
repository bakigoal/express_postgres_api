const express = require("express")
const cors = require('cors')
const port = process.env.PORT
const app = express()

app.use(cors())

app.get("/", (req, res) => {
    res.json({ message: "Server is running :D" });
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})