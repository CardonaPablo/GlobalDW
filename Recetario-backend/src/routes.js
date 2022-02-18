const { Router } = require('express')

const router = new Router()
const controller = require("./controllers")

router.get("/login", controller.login)

module.exports = router;