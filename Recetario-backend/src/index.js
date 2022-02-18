const express = require('express');
const app = express();
const cors = require("cors")

const router = require("./routes")

app.use(express.json())
app.use(cors())
app.use("", router)

const listenOnPort = 4000;
app.listen(listenOnPort, () => { console.log(`Listening on port ${listenOnPort}...`)})