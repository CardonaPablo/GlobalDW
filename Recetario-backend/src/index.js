const express = require('express');
const app = express();

const router = require("./routes")

app.use("", router)

const listenOnPort = 4000;
app.listen(listenOnPort, () => { console.log(`Listening on port ${listenOnPort}...`)})