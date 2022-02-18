const { Router } = require('express')

const router = new Router()
const controller = require("./controllers")

router.post("/login", controller.login)
router.get("/receta/:id", controller.getRecipe)
router.get("/recetas", controller.getRecipes)

module.exports = router;