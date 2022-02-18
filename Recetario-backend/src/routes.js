const { Router } = require('express')

const router = new Router()
const controller = require("./controllers")

router.post("/login", controller.login)
router.post("/recetas", controller.createRecipe)
router.get("/receta/:id", controller.getRecipe)
router.get("/recetas", controller.getRecipes)
router.put("/receta/:id", controller.updateRecipe)
router.delete("/receta/:id", controller.deleteRecipe)

module.exports = router;