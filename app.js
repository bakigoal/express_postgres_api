const express = require("express")
const bodyParser = require("body-parser");
const cors = require('cors')
const port = process.env.PORT
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({ message: "Server is running :D" });
})

require('./routes/contact.routes.js')(app);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})