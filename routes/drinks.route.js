const { Router } = require("express");
const { drinkController } = require("../controllers/driks.controller");

const router = Router();

router.get("/drinks", drinkController.getDrink);
router.get("/drinks/in-stock", drinkController.getInStock);
router.get("/drinks/:id", drinkController.getDrinkId);
router.post("/drinks", drinkController.addDrink);
router.delete("/drinks/:id", drinkController.deleteDrink);
router.patch("/drinks/:id", drinkController.updateDrink);

module.exports = router;
